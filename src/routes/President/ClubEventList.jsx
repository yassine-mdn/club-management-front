import VerticalCard from "../../components/vertical-card/index.jsx";
import {Fragment} from "react";
import {Spinner} from "@fluentui/react-components";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import moment from "moment";


const ClubEventList = () => {

    const navigate = useNavigate();


    const eventList = useQuery({
            queryKey: ['getClubDetailPage'],
            queryFn: () => axios.get("http://localhost:8080/api/v1/clubs/4/events", {
                params: {
                    pageNumber: 0,
                    pageSize: 15
                }
            })
        }
    )

    return (
        <div className={"flex flex-col gap-10 justify-center mx-36"}>
            {eventList.isSuccess ?
                <div className={"flex flex-wrap justify-center gap-8"}>
                    {
                        eventList.data.data.map((details) => (
                            <Fragment key={details?.idEvent}>
                                <VerticalCard icon={"https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png"}
                                              title={details?.name}
                                              description={moment(details.date).format("DD-MM-YYYY")}
                                              handleClick={() => (navigate(`${details?.idEvent}`))}
                                >
                                    <div className={"flex flex-col gap-2"}>
                            <span className={"line-clamp-3"}>
                                {details?.description}
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
        </div>

    );
};

export default ClubEventList;