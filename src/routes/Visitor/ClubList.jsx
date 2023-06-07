import VerticalCard from "../../components/vertical-card/index.jsx";
import {Fragment} from "react";
import {Button, Title3} from "@fluentui/react-components";
import {AddCircle24Regular} from "@fluentui/react-icons";


const ClubList = () => {

    const n = 11;

    return (
        <div className={"flex flex-col gap-10 justify-center"}>
            <div className={"flex flex-wrap justify-center gap-8"}>
                {
                    [...Array(n)].map((e, i) => (
                        <Fragment key={i}>
                            <VerticalCard icon={"https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png"}
                                          title={"Club UIR BDE"}
                                          onClick={() => (console.log(`khedam hh ${i}`))}
                            >
                                <div className={"flex flex-col gap-2"}>
                            <span className={"line-clamp-3"}>
                                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes
                                toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow
                                pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                                claw.
                            </span>
                                    <h1 className={"text-red-500"}>Element 2</h1>
                                </div>
                            </VerticalCard>
                        </Fragment>

                    ))
                }
            </div>

            <div className={"flex flex-col gap-3 justify-center items-center"}>
                <Title3 className={"items-center w-auto"}>None of them interest you?</Title3>
                <Button className={"items-center w-auto"} size={"large"} appearance={"primary"} iconPosition={"before"} icon={<AddCircle24Regular/>}>Create new Club</Button>
            </div>
        </div>

    );
};

export default ClubList;