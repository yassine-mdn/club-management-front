
import {Body2, Title1} from "@fluentui/react-components";
import Navbar from "../../components/navbar/index.jsx";
import Carousel from "../../components/carousel/index.jsx";


const Home = () => {
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
        <>
            <Navbar/>
            <div className={"mt-20"}>
                <Carousel slides={slides}/>
                <div className="flex flex-col items-center gap-4 mx-4 lg:mx-8 xl:mx-24  mt-4">
                    <Title1  align={"center"}>Lorem Ipsum</Title1>
                    <Body2 align={"center"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris metus, rhoncus sit amet euismod quis, pellentesque quis neque. Vestibulum metus sem, mollis in lobortis bibendum, mattis et nisl. Curabitur tempor auctor lobortis. Maecenas semper neque odio, eget tristique quam blandit eu. Morbi quis erat risus. Maecenas ac nisl auctor, malesuada nibh vitae, fermentum enim. Proin lobortis convallis felis, sed sagittis lacus lacinia congue. Phasellus in arcu varius, euismod augue finibus, rutrum lectus. Etiam ornare ullamcorper vulputate. Nam ultricies condimentum nulla. Nulla eu tristique mi. In scelerisque justo eget accumsan porta. Maecenas eget diam rhoncus, porttitor sem eget, facilisis arcu. Integer posuere, est at bibendum consequat, eros enim porta orci, sit amet interdum enim augue ac mauris. Aliquam justo lorem, rhoncus vulputate ante feugiat, aliquam viverra nisi.                    </Body2>
                </div>
                <div className="flex flex-col items-center gap-4 mx-4 lg:mx-8 xl:mx-16 mt-8">
                    <Title1  align={"center"}>Featured Clubs</Title1>
                    <div className={"flex flex-wrap gap-3 lg:gap-8 justify-center"}>
                        {slides.map(slide => (
                            <div key={slide.url} className={"h-32  lg:h-56 xl:h-64 aspect-video object-cover  rounded-lg shadow-sm relative group"}>
                                <div
                                    style={{ backgroundImage: `url(${slide.url})` }}
                                    className={"h-full w-full bg-center bg-cover  rounded-lg "}>
                                </div>
                                <div className='hidden  absolute top-0 h-full w-full  bg-black/30  rounded-lg group-hover:flex justify-center items-center cursor-pointer text-white'>
                                    <span className={"font-semibold text-lg"}> test </span>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className={"bg-blue-900 h-80 w-full mt-12"}>

                </div>

            </div>

        </>
    );
};

export default Home;