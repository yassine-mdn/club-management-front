import VerticalCard from "../../../components/vertical-card/index.jsx";
import {Fragment} from "react";
import {Button, Spinner, Title3} from "@fluentui/react-components";
import {AddCircle24Regular} from "@fluentui/react-icons";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const ClubList = () => {

    const navigate = useNavigate();


    const clubList = useQuery({
            queryKey: ['getClubDetailPage'],
            queryFn: () => axios.get("http://localhost:8080/api/v1/clubs/detailed", {
                params: {
                    pageNumber: 0,
                    pageSize: 15
                }
            })
        }
    )

    return (
        <div className={"flex flex-col gap-10 justify-center mx-36"}>
            {clubList.isSuccess ?
                <div className={"flex flex-wrap justify-center gap-8"}>
                    {
                        clubList.data?.data.map((details) => (
                            <Fragment key={details?.club.idC}>
                                <VerticalCard icon={"https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png"}
                                              title={details?.club.name}
                                              handleClick={() => (navigate(`${details?.club.idC}`))}
                                >
                                    <div className={"flex flex-col gap-2"}>
                            <span className={"line-clamp-3"}>
                                {details?.club.description}
                            </span>
                                    </div>
                                </VerticalCard>
                            </Fragment>

                        ))
                    }
                </div>
                :
                <Spinner/>
            }

            <div className={"flex flex-col gap-3 justify-center items-center"}>
                <Title3 className={"items-center w-auto"}>None of them interest you?</Title3>
                <Button className={"items-center w-auto"} size={"large"} appearance={"primary"} iconPosition={"before"}
                        icon={<AddCircle24Regular/>}>Create new Club</Button>
            </div>
        </div>

    );
};

export default ClubList;