import {Button, Subtitle1, Title1, Title3} from "@fluentui/react-components";
import FileCard from "../../components/file-card/index.jsx";



const EventDetailsPers = () => {
    return (
        <div className={"flex flex-col gap-2 max-w-[80rem] h-full mx-auto"}>
            <div className={"flex gap-4 w-full"}>
                <img className={"h-32 w-32 aspect-square rounded-md self-center"}
                     alt={"logo"}
                     src={"https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png"}
                />
                <div className={"flex flex-col gap-2 w-full "}>
                    <div className={"flex justify-between items-center"}>
                        <Title1>Club Name</Title1>
                        <span>place holder</span>
                    </div>
                    <Subtitle1 className={"!line-clamp-3 h-22"}>
                        Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes
                        toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow
                        pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                        claw. pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop
                        bear
                        claw. pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop
                        bear
                        claw.
                    </Subtitle1>
                </div>
            </div>
            <div className={"grid grid-cols-2 grid-rows-1 h-full w-full mt-4"}>
                    <div className={"flex flex-col gap-2 "}>
                        <Title3>Transactions</Title3>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>

                    </div>
                <div className={"flex flex-col gap-2 "}>


                        <Title3>Participants</Title3>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>

                </div>
            </div>
            <Button appearance={"primary"} size={"large"} className={"mt-auto self-end w-fit"}>Save</Button>
        </div>
    );
};

export default EventDetailsPers;