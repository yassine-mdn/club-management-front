import {useCountdown} from "../../../hooks/useCountDown.jsx";
import {Spinner, Subtitle2, Title1} from "@fluentui/react-components";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useParams} from "react-router-dom";
import moment from "moment";


const EventDetails = () => {

    const {id} = useParams()

    const eventInfo = useQuery({
            queryKey: ['getEventById'],
            queryFn: () => axios.get(`http://localhost:8080/api/v1/events/${id}`)
        }
    )

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
    }


    const [days, hours, minutes, seconds] = useCountdown(new Date(eventInfo.data?.data.date ?? "2023-06-25"));

    return (
        <div className={"flex flex-col gap-2"}>

            <img className={"xl:h-[46rem] lg:h-[50rem] w-full object-cover relative group"}
                 src={
                     eventInfo.data?.data.cover ??
                     "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"}
                 alt={""}
            />
            <div className={"flex flex-col gap-2 mx-36"}>
                {days + hours + minutes + seconds <= 0 ?
                    <h1 className={"font-bold text-9xl self-center"}>DATE EXPIRED</h1>
                    :
                    <div className={"flex gap-2 self-center items-center"}>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"font-bold text-9xl"}>{minTwoDigits(days)}</span>
                            <span className={"self-center"}>days</span>
                        </div>
                        <span className={"font-bold text-9xl"}> : </span>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"font-bold text-9xl"}>{minTwoDigits(hours)}</span>
                            <span className={"self-center"}>hours</span>
                        </div>
                        <span className={"font-bold text-9xl"}> : </span>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"font-bold text-9xl"}>{minTwoDigits(minutes)}</span>
                            <span className={"self-center"}>minutes</span>
                        </div>
                        <span className={"font-bold text-9xl"}> : </span>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"font-bold text-9xl"}>{minTwoDigits(seconds)}</span>
                            <span className={"self-center"}>seconds</span>
                        </div>
                    </div>
                }

                {
                    eventInfo.isSuccess ?
                        <Subtitle2 className={"mx-2 lg:mx-8 xl:mx-24 mt-8"} align={"center"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis ex mattis, auctor sem
                            et,
                            hendrerit
                            velit. Morbi consequat, lectus quis congue aliquet, magna dolor rutrum leo, ac hendrerit
                            tortor
                            purus
                            quis ex. Vivamus ac lectus ornare, vestibulum enim ut, lobortis dolor. Fusce sagittis
                            convallis
                            nisl,
                            sed condimentum est faucibus elementum. Maecenas lacinia purus vitae maximus tempor. Sed
                            porttitor
                            faucibus fringilla. Praesent volutpat interdum lacus sit amet vehicula. Nullam ac tristique
                            justo.
                            Aenean quis blandit risus, eu consequat felis. Donec posuere purus at erat lacinia, porta
                            elementum
                            turpis vestibulum. Ut tristique diam eu justo ornare, quis venenatis eros eleifend.
                            Vestibulum nibh
                            quam, porttitor non accumsan vel, tincidunt at odio. Cras vitae fermentum ipsum.

                            Suspendisse suscipit risus non tincidunt rhoncus. Donec efficitur, velit ut iaculis porta,
                            risus
                            tellus
                            porttitor eros, in auctor erat elit at quam. Fusce dapibus arcu at nisi tincidunt, sed
                            viverra
                            mauris
                            facilisis. Etiam bibendum tristique ipsum vel ultricies. Praesent sed neque erat. In
                            vulputate ipsum
                            orci. Suspendisse vitae lacus sodales, iaculis est non, venenatis metus. Pellentesque non
                            dictum
                            nulla,
                            vestibulum sollicitudin nulla. Sed egestas sit amet est ac scelerisque.
                        </Subtitle2>
                        :
                        <Spinner/>
                }

                <Title1 align={"center"} className={"text-blue-950  mt-8"}> Where to find us</Title1>
                {
                    eventInfo.isSuccess &&
                    <Subtitle2 className={"mx-2 lg:mx-8 xl:mx-24 mt-2"} align={"center"}>batimment 2 le {moment(eventInfo.data?.data.date).format("DD-MM-YYYY")} à {moment(eventInfo.data?.data.date).format("HH:mm")} </Subtitle2>
                }

            </div>
        </div>
    );
};

export default EventDetails;