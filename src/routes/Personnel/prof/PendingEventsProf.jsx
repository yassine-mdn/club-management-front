import {Fragment} from "react";
import VerticalCard from "../../../components/vertical-card/index.jsx";
import {Input, Spinner} from "@fluentui/react-components";
import {Search20Filled} from "@fluentui/react-icons";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import moment from "moment";

const PendingEventsProf = () => {

    const navigate = useNavigate()

    const eventList = useQuery({
            queryKey: ['getEventPage'],
            queryFn: () => axios.get("http://localhost:8080/api/v1/events", {
                params: {
                    pageNumber: 0,
                    pageSize: 1
                }
            })
        }
    )


    return (
        <div className={"flex flex-col gap-4 h-full max-w-[80rem] overflow-y-scroll scrollbar-hide mx-auto"}>
            {
                eventList.isSuccess?
                    <>
                        <div className={"mx-3 flex justify-between"}>
                            <Input contentBefore={<Search20Filled/>} size={"large"} type={"search"}
                                   style={{maxWidth: "800px", width: "600px"}}/>
                        </div>

                        <div className={"flex flex-wrap justify-around gap-8 pt-4 scrollbar-hide items-start m-3"}>

                            {
                                eventList.data?.data.map((details) => (
                                    <Fragment key={details.idEvent}>
                                        <VerticalCard icon={details.cover ?? "https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png"}
                                                      title={details.name}
                                                      description={moment(details.date).format("DD-MM-YYYY")}
                                                      handleClick={() => (navigate(`${details.idEvent}`))}
                                        >
                                            <div className={"flex flex-col gap-2 justify-between h-full"}>
                                    <span className={"line-clamp-3"}>
                                        Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes
                                        toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow
                                        pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                                        claw.
                                    </span>
                                                <h1 className={"text-red-500 font-bold text-lg self-end pr-2 mt-auto"}>{details.status}</h1>
                                            </div>
                                        </VerticalCard>
                                    </Fragment>

                                ))
                            }
                        </div>
                    </>
                    :
                    <Spinner/>
            }
        </div>
    );
};

export default PendingEventsProf;