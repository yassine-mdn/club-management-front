import {
     Button,
    Input,
    Spinner,
    Textarea,
    Title1,
    Title3,
} from "@fluentui/react-components";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useEffect, useState} from "react";


const ClubEdit = () => {

    const [description, setDescription] = useState("");
    const [aboutUs, setAboutUs] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const navigate = useNavigate();

    const clubDetails = useQuery({
            queryKey: ['getClubDetailPage'],
            queryFn: () => axios.get(`http://localhost:8080/api/v1/clubs/4/details`)
        }
    )

    useEffect(() => {

        setDescription(clubDetails.data?.data.description??"");
        setAboutUs(clubDetails.data?.data.aboutUs??"");
        setEmail(clubDetails.data?.data?.email??"");
        setPhone(clubDetails.data?.data?.phone??"");
    }, [clubDetails.isSuccess]);



    const update = () => {

        axios.put("http://localhost:8080/api/v1/clubs/4/details",{
            "description": description,
            "aboutUs": aboutUs,
            "email": email,
            "phone": phone,
        })
        navigate(-1)
    }

    return (
        <div className={"flex flex-col gap-2 max-w-[80rem] h-full mx-auto"}>
            {
                clubDetails.isSuccess ?
                    <>
                        <div
                            className={"w-[100rem] h-[50rem] rounded-lg bottom-8 self-center relative bg-cover bg-no-repeat bg-center shadow-lg"}
                            style={{backgroundImage: `url("${clubDetails.data?.data.cover}")`}}
                        >
                            <img
                                className={"h-32 w-32 aspect-square object-cover rounded-md self-center bg-white border-2 relative shadow-lg top-80 left-12 "}
                                alt={"logo"}
                                src={clubDetails.data?.data.logo}
                            />

                            <Title1 className={"text-white relative top-52 left-48"}>{clubDetails.data?.data?.club.name}</Title1>

                        </div>

                        <div className={"h-full w-full"}>

                            <div className={"mt-4"}>
                                <Title3 className={"ml-5"}>Description</Title3>
                                <Textarea size={"large"}
                                          className={"w-full h-22"}
                                          placeholder={"description"}
                                          value={description}
                                          onChange={(e)=> setDescription(e.target.value)}

                                />
                            </div>

                            <div className={"mt-4"}>
                                <Title3  className={"ml-5 mt-12"}>About us</Title3>
                                <Textarea size={"large"}
                                          className={"w-full h-22"}
                                          placeholder={"about us"}
                                          value={aboutUs}
                                          onChange={(e)=> setAboutUs(e.target.value)}

                                />
                            </div>
                            <div className={"grid grid-rows-1 grid-cols-2 mt-4 gap-4"}>
                                <div className={"flex flex-col gap-2 "}>
                                    <Title3  className={"ml-5"}>Email</Title3>
                                    <div className={" mt-2"}>
                                        <Input size={"large"} className={"w-full"} placeholder={"example@mail.com"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className={"flex flex-col gap-2 "}>
                                    <Title3  className={"ml-5"}>Phone</Title3>
                                    <div className={"mt-2"}>
                                        <Input size={"large"} className={"w-full"} placeholder={"0666666690"} value={phone} onChange={e => setPhone(e.target.value)}/>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <Button appearance={"primary"} size={"large"} className={"mt-auto self-end w-fit"}
                                onClick={() => update()}>Save</Button>
                    </>
                    :
                    <Spinner/>

            }
        </div>
    );
};

export default ClubEdit;