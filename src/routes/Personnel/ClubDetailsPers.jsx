import {Avatar, Body2, Button, Input, Subtitle1, Subtitle2, Title1, Title3} from "@fluentui/react-components";
import FileCard from "../../components/file-card/index.jsx";
import {Dropdown, Option} from "@fluentui/react-components";


const ClubDetailsPers = () => {

    const options = [
        "Cat",
        "Caterpillar",
        "Corgi",
        "Chupacabra",
        "Dog",
    ];

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
                        <Dropdown
                            defaultValue={"Cat"}
                            defaultSelectedOptions={["Cat"]}
                        >
                            {options.map((option) => (
                                <Option key={option} disabled={option === "Ferret"}>
                                    {option}
                                </Option>
                            ))}
                        </Dropdown>
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
                    <Title3>Committee</Title3>
                    <div className={"w-full flex flex-wrap gap-4"}>
                        {
                            [...Array(5)].map((e, i) => (
                                <div key={i} className={"flex items-center gap-2 mb-4"}>
                                    <Avatar size={48} color={"colorful"} name={"yassine mouddene"}/>
                                    <div className={"flex flex-col gap-1"}>
                                        <Subtitle2>Yassine Mouddene</Subtitle2>
                                        <Body2>President</Body2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={"flex flex-col gap-2 "}>
                        <Title3>Linked Files</Title3>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>

                    </div>
                </div>
                <div className={"flex flex-col gap-2 "}>
                    <Title3>Budget</Title3>
                    <div className={"w-full flex justify-between gap-4"}>
                        <Input size={"large"} value={"assigned budget"} className={"!flex-1"}/>
                        <Input size={"large"} value={"used budget"} disabled={true}  className={"!flex-1"}/>
                    </div>
                    <div className={"flex flex-col gap-2 "}>
                        <Title3>Members</Title3>
                        <FileCard fileName={"test file"} handleClick={()=> true} description={"Onedrive > Docs"}/>
                    </div>
                </div>
            </div>
            <Button appearance={"primary"} size={"large"} className={"mt-auto self-end w-fit"}>Save</Button>
        </div>
    );
};

export default ClubDetailsPers;