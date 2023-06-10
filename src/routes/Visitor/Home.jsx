import Carousel from "../../components/carousel/index.jsx";
import {Body2, Spinner, Title1} from "@fluentui/react-components";
import ImageCard from "../../components/image-card/index.jsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    const clubList = useQuery({
        queryKey: ['getClubDetailPage'],
        queryFn: () => axios.get("http://localhost:8080/api/v1/clubs/detailed",{
            params:{
                pageNumber: 0,
                pageSize: 5
            }
        })
        }

    )

    return (
        <>
            {clubList.isSuccess ?
                <Carousel slides={clubList.data?.data.map(details => ({url: details?.cover}))} handleClick={() => true}/>
               :
               <Spinner/>
            }

            <div className="flex flex-col items-center gap-4 mx-4 lg:mx-8 xl:mx-24  mt-4">
                <Title1  align={"center"}>Lorem Ipsum</Title1>
                <Body2 align={"center"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris metus, rhoncus sit amet euismod quis, pellentesque quis neque. Vestibulum metus sem, mollis in lobortis bibendum, mattis et nisl. Curabitur tempor auctor lobortis. Maecenas semper neque odio, eget tristique quam blandit eu. Morbi quis erat risus. Maecenas ac nisl auctor, malesuada nibh vitae, fermentum enim. Proin lobortis convallis felis, sed sagittis lacus lacinia congue. Phasellus in arcu varius, euismod augue finibus, rutrum lectus. Etiam ornare ullamcorper vulputate. Nam ultricies condimentum nulla. Nulla eu tristique mi. In scelerisque justo eget accumsan porta. Maecenas eget diam rhoncus, porttitor sem eget, facilisis arcu. Integer posuere, est at bibendum consequat, eros enim porta orci, sit amet interdum enim augue ac mauris. Aliquam justo lorem, rhoncus vulputate ante feugiat, aliquam viverra nisi.                    </Body2>
            </div>
            { clubList.isSuccess?
                <div className="flex flex-col items-center gap-4 mx-4 lg:mx-8 xl:mx-16 mt-8">
                    <Title1  align={"center"}>Featured Clubs</Title1>
                    <div className={"flex flex-wrap gap-3 lg:gap-8 justify-center"}>
                        {clubList.data?.data.map(details => (
                            <ImageCard key={details?.club.idC} handleClick={() => navigate(`/clubs/${details?.club.idC}`)} title={details?.club?.name} img={details?.cover}/>

                        ))}
                    </div>
                </div>
                :
                <Spinner/>

            }

        </>
    );
};

export default Home;