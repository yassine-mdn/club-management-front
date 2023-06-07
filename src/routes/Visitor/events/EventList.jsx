import {Title3} from "@fluentui/react-components";
import ImageCard from "../../../components/image-card/index.jsx";
import Carousel from "../../../components/carousel/index.jsx";
const EventList = () => {

    const n = 6;
    const slides = [
        {
            url: "https://www.uir.ac.ma/upload/cbuilder/3187e7e694ad3a3f24f79f2301a9b8c84118b31c.jpeg",
        },
        {
            url: "https://www.uir.ac.ma/upload/cbuilder/8ea2e817f862b5794f543d21080eb9a77941d66a.jpeg",
        },
        {
            url: "https://www.uir.ac.ma/upload/cbuilder/3187e7e694ad3a3f24f79f2301a9b8c84118b31c.jpeg",
        },

        {
            url: "https://www.uir.ac.ma/upload/cbuilder/8ea2e817f862b5794f543d21080eb9a77941d66a.jpeg",
        },
        {
            url: "https://www.uir.ac.ma/upload/cbuilder/3187e7e694ad3a3f24f79f2301a9b8c84118b31c.jpeg",
        },
    ];

    return (
        <div className={"flex flex-col gap-2"}>
            <Carousel slides={slides}/>
            <div className={"flex flex-col gap-2 p-2 px-6"}>

                <Title3>Previous Events</Title3>
                <div className={"flex gap-8 overflow-x-scroll justify-start scrollbar-hide rounded-lg"}>
                    {
                        [...Array(n)].map((e, i) => (

                            <ImageCard img={"https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"} title={`image ${i}`} handleClick={() => true} key={i}/>
                        ))
                    }
                </div>
            </div>

            <div className={"flex flex-col gap-2 p-2 px-6"}>

                <Title3>Event Calendar</Title3>
                <h1 className={"text-2xl text-red-500"}>TO DO!!!!! (khassek tela3 custom component from scratch)</h1>
            </div>



        </div>
    );
};

export default EventList;