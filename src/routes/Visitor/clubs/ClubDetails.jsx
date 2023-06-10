import {Avatar, Link, Spinner, Subtitle2, Title1} from "@fluentui/react-components";
import ImageCard from "../../../components/image-card/index.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const ClubDetails = () => {

    const {id} = useParams()

    const navigate = useNavigate();

    const clubInfo = useQuery({
            queryKey: ['getClubDetailsById'],
            queryFn: () => axios.get(`http://localhost:8080/api/v1/clubs/${id}/details`)
        }
    )

    const clubEvents = useQuery({
            queryKey: ['getClubEventsById'],
            queryFn: () => axios.get(`http://localhost:8080/api/v1/clubs/${id}/events`)
        }
    )


    return (
        <div className={"flex flex-col gap-2"}>
            <img className={"xl:h-[46rem] lg:h-[50rem] w-full relative group"}
                 src={
                     clubInfo.data?.data.cover ??
                     "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"}
                 alt={""}
            />

            <div className={"flex flex-col gap-2 mx-36"}>

                <Title1 align={"start"} className={"text-blue-950  mt-8 mx-2"}> About us</Title1>
                <Subtitle2 className={"mx-4 text-neutral-600 "} align={"start"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis ex mattis, auctor sem et,
                    hendrerit
                    velit. Morbi consequat, lectus quis congue aliquet, magna dolor rutrum leo, ac hendrerit tortor
                    purus
                    quis ex. Vivamus ac lectus ornare, vestibulum enim ut, lobortis dolor. Fusce sagittis convallis
                    nisl,
                    sed condimentum est faucibus elementum. Maecenas lacinia purus vitae maximus tempor. Sed porttitor
                    faucibus fringilla. Praesent volutpat interdum lacus sit amet vehicula. Nullam ac tristique justo.
                    Aenean quis blandit risus, eu consequat felis. Donec posuere purus at erat lacinia, porta elementum
                    turpis vestibulum. Ut tristique diam eu justo ornare, quis venenatis eros eleifend. Vestibulum nibh
                    quam, porttitor non accumsan vel, tincidunt at odio. Cras vitae fermentum ipsum.

                    Suspendisse suscipit risus non tincidunt rhoncus. Donec efficitur, velit ut iaculis porta, risus
                    tellus
                    porttitor eros, in auctor erat elit at quam. Fusce dapibus arcu at nisi tincidunt, sed viverra
                    mauris
                    facilisis. Etiam bibendum tristique ipsum vel ultricies. Praesent sed neque erat. In vulputate ipsum
                    orci. Suspendisse vitae lacus sodales, iaculis est non, venenatis metus. Pellentesque non dictum
                    nulla,
                    vestibulum sollicitudin nulla. Sed egestas sit amet est ac scelerisque.
                </Subtitle2>

                <Title1 align={"start"} className={"text-blue-950  mt-8 mx-2"}> Previous Events</Title1>
                {clubEvents.isSuccess ?
                    <div className={"flex gap-8 overflow-x-scroll justify-around scrollbar-hide rounded-lg"}>
                        {
                            clubEvents.data?.data.map((event) => (

                                <ImageCard
                                    img={event?.cover ?? "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"}
                                    title={event?.name} handleClick={() => navigate(`/events/${event?.idEvent}`)}
                                    key={event?.idEvent}/>
                            ))
                        }
                    </div>
                    :
                    <Spinner/>
                }
                <Title1 align={"start"} className={"text-blue-950  mt-8 mx-2"}> Want to join us ?</Title1>
                <Link as={"a"} href={"https://react.fluentui.dev/?path=/docs/components-link--default"}
                      className={"!mx-4 !text-xl"}>Click here to join us</Link>

                <Title1 align={"start"} className={"text-blue-950  mt-8 mx-2"}> Founding Members</Title1>
                {
                    clubInfo.isSuccess &&
                    <div className={"flex gap-8 overflow-x-scroll justify-around scrollbar-hide rounded-lg"}>
                        {
                            clubInfo.data?.data?.club?.committeeMembers.map((comitee) => (
                                <div key={comitee.idA} className={"flex flex-col flex-wrap gap-1 justify-center items-center"}>
                                    <Avatar size={48} color={"colorful"} name={`${comitee.firstName} ${comitee.lastName}`}/>
                                    <span className={"text-lg "}>{`${comitee.firstName} ${comitee.lastName}`}</span>
                                </div>
                            ))
                        }
                    </div>
                }

                <Title1 align={"start"} className={"text-blue-950  mt-8 mx-2"}> Socials</Title1>
                <div className={"flex gap-8 overflow-x-scroll justify-around scrollbar-hide rounded-lg mt-6"}>
                    <img
                        className={"h-12 w-12 aspect-square box-content"}
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"}
                        alt={"logo"}
                    />
                    <img
                        className={"h-12 w-12 aspect-square box-content"}
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"}
                        alt={"logo"}
                    />
                    <img
                        className={"h-12 w-12 aspect-square box-content"}
                        src={"https://www.citypng.com/public/uploads/preview/-416010329907nkigt074x.png?v=2023042707"}
                        alt={"logo"}
                    />
                    <img
                        className={"h-12 w-12 aspect-square box-content"}
                        src={"https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"}
                        alt={"logo"}
                    />
                </div>
            </div>

        </div>
    );
};

export default ClubDetails;