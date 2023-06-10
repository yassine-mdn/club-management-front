import {Spinner, Title3} from "@fluentui/react-components";
import ImageCard from "../../../components/image-card/index.jsx";
import Carousel from "../../../components/carousel/index.jsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const EventList = () => {

    const navigate = useNavigate();

    const eventList = useQuery({
            queryKey: ['getEventPage'],
            queryFn: () => axios.get("http://localhost:8080/api/v1/events", {
                params: {
                    pageNumber: 1,
                    pageSize: 5
                }
            })
        }
    )

    const featuredEvents = useQuery({
            queryKey: ['getEventFeatured'],
            queryFn: () => axios.get("http://localhost:8080/api/v1/events", {
                params: {
                    pageNumber: 0,
                    pageSize: 3
                }
            })
        }
    )


    return (
        <div className={"flex flex-col gap-2"}>
            {featuredEvents.isSuccess ?
                <Carousel slides={featuredEvents.data?.data.map(details => ({url: details?.cover}))}
                          handleClick={() => true}/>
                :
                <Spinner/>
            }
            <div className={"flex flex-col gap-2 mx-36"}>
                {eventList.isSuccess ?
                    <div className={"flex flex-col gap-2 p-2 px-6"}>

                        <Title3>Previous Events</Title3>
                        <div className={"flex gap-8 overflow-x-scroll justify-start scrollbar-hide rounded-lg"}>
                            {
                                eventList.data?.data.map((details)=> (

                                    <ImageCard
                                        img={details?.cover}
                                        title={details?.name} handleClick={() => navigate(`${details?.idEvent}`)} key={details?.idEvent}/>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <Spinner/>
                }

                <div className={"flex flex-col gap-2 p-2 px-6"}>

                    <Title3>Event Calendar</Title3>
                    <h1 className={"text-2xl text-red-500"}>TO DO!!!!! (khassek tela3 custom component from
                        scratch)</h1>
                </div>
            </div>


        </div>
    );
};

export default EventList;