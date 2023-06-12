import {Avatar, Body2, Button, Input, Spinner, Subtitle1, Subtitle2, Title1, Title3} from "@fluentui/react-components";
import FileCard from "../../../components/file-card/index.jsx";
import {Dropdown, Option} from "@fluentui/react-components";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useEffect, useState} from "react";
import { saveAs } from 'file-saver';

const ClubDetailsPers = () => {

    const {id} = useParams()

    const [budget, setBudget] = useState(0);


    const navigate = useNavigate();

    const clubDetails = useQuery({
            queryKey: ['getClubDetailPage'],
            queryFn: () => axios.get(`http://localhost:8080/api/v1/clubs/${id}/details`)
        }
    )



    useEffect(() => {
        if (clubDetails.isSuccess)
            setBudget(clubDetails.data?.data?.club.budget.budget_initial);

    }, [clubDetails.isSuccess]);

    const download = (id,fileName) => {
        axios.get(`http://localhost:8080/api/v1/documents/${id}`,{ responseType: 'blob' }).then (response => {
            const type = response.headers['content-type']
            const blob = new Blob([response.data], { type: type, encoding: 'UTF-8' })
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = fileName
            link.click()
        }).catch((response) => {
            console.error("Could not Download the Excel report from the backend.", response);
        });
    }

    const options = [
        'CREATION_STEP_1',
        'CREATION_STEP_2',
        'CREATION_STEP_3',
        'ACTIVE',
        'ABANDONED',
        'DECLINED',
    ];

    const update = () => {
      axios.put(`http://localhost:8080/api/v1/clubs/${id}`,{
          "status": 'ACTIVE'
      })

      axios.put(`http://localhost:8080/api/v1/budgets/${clubDetails.data?.data?.club.budget.idBudget}`,{
          "idBudget": clubDetails.data?.data?.club.budget.idBudget,
          "budget_initial": budget,
          "budget_restant": clubDetails.data?.data?.club.budget.budget_restant
      })
        navigate("/admin/club-list/")
    }



    return (
        <div className={"flex flex-col gap-2 max-w-[80rem] h-full mx-auto"}>
            {
                clubDetails.isSuccess ?
                    <>
                        <div className={"flex gap-4 w-full"}>
                            <img className={"h-32 w-32 aspect-square object-cover rounded-md self-center"}
                                 alt={"logo"}
                                 src={clubDetails.data?.data.logo}
                            />
                            <div className={"flex flex-col gap-2 w-full "}>
                                <div className={"flex justify-between items-center"}>
                                    <Title1>{clubDetails.data?.data?.club.name}</Title1>
                                    <Dropdown
                                        defaultValue={`${clubDetails.data?.data?.club.status}`}
                                        defaultSelectedOptions={[`${clubDetails.data?.data?.club.status}`]}
                                    >
                                        {options.map((option) => (
                                            <Option key={option}>
                                                {option}
                                            </Option>
                                        ))}
                                    </Dropdown>
                                </div>
                                <Subtitle1 className={"!line-clamp-3 h-22"}>
                                    {clubDetails.data?.data.description ?? 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes' +
                                        'toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow' +
                                        'pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear' +
                                        'claw.'}
                                </Subtitle1>
                            </div>
                        </div>
                        <div className={"grid grid-cols-2 grid-rows-1 h-full w-full mt-4"}>
                            <div className={"flex flex-col gap-2 "}>
                                <Title3>Committee</Title3>
                                <div className={"w-full flex flex-wrap gap-4"}>
                                    {

                                        clubDetails.data?.data?.club?.committeeMembers?.map((commitee) => (
                                            <div key={commitee.idA} className={"flex items-center gap-2 mb-4"}>
                                                <Avatar size={48} color={"colorful"} name={`${commitee.firstName} ${commitee.lastName}`}/>
                                                <div className={"flex flex-col gap-1"}>
                                                    <Subtitle2>{commitee.email}</Subtitle2>
                                                    <Body2>{commitee.roles[0]}</Body2>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className={"flex flex-col gap-2 "}>
                                    <Title3>Linked Files</Title3>
                                    {
                                        clubDetails.data?.data?.club?.documents?.map((doc) => (
                                            <FileCard fileName={doc.name} handleClick={() => download(doc.idDocument,doc.name)}
                                                      description={doc.dateUpload} key={doc.idDocument}/>
                                        ))
                                    }


                                </div>
                            </div>
                            <div className={"flex flex-col gap-2 "}>
                                <Title3>Budget</Title3>
                                <div className={"w-full flex justify-between gap-4"}>
                                    <Input size={"large"} value={budget} onChange={(e)=> setBudget(e.target.value)} className={"!flex-1"}/>
                                    <Input size={"large"} value={clubDetails.data?.data?.club.budget.budget_restant} disabled={true} className={"!flex-1"}/>
                                </div>
                                <div className={"flex flex-col gap-2 "}>
                                    <Title3>Members</Title3>
                                    <FileCard fileName={"members.xlsx"} handleClick={() => (
                                        axios.get(`http://localhost:8080/api/v1/clubs/${clubDetails.data?.data?.club.idC}/members/file`, { responseType: 'blob' }).then (response => {
                                            const type = response.headers['content-type']
                                            saveAs(new Blob([response.data], { type: type}), `members club ${clubDetails.data?.data?.club.name}`);
                                        }).catch((response) => {
                                            console.error("Could not Download the Excel report from the backend.", response);
                                        })
                                    )}
                                              description={"now"}/>
                                </div>
                            </div>
                        </div>
                        <Button appearance={"primary"} size={"large"} className={"mt-auto self-end w-fit"} onClick={() => update()}>Save</Button>
                    </>
                    :
                    <Spinner/>

            }
        </div>
    );
};

export default ClubDetailsPers;