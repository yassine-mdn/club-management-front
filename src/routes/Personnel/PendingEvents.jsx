import {Fragment} from "react";
import VerticalCard from "../../components/vertical-card/index.jsx";
import {Input} from "@fluentui/react-components";
import {Search20Filled} from "@fluentui/react-icons";

const PendingEvents = () => {
    return (
        <div className={"flex flex-col gap-4 h-full max-w-[80rem] overflow-y-scroll scrollbar-hide mx-auto"}>
            <div className={"mx-3 flex justify-between"}>
                <Input contentBefore={<Search20Filled/>} size={"large"} type={"search"}
                       style={{maxWidth: "800px", width: "600px"}}/>
            </div>

            <div className={"flex flex-wrap justify-around gap-8 pt-4 scrollbar-hide items-start m-3"}>

                {
                    [...Array(10)].map((e, i) => (
                        <Fragment key={i}>
                            <VerticalCard icon={"https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png"}
                                          title={"Club UIR BDE"}
                                          description={"01/01/2001"}
                                          handleClick={() => (console.log(`khedam hh ${i}`))}
                            >
                                <div className={"flex flex-col gap-2 justify-between h-full"}>
                                    <span className={"line-clamp-3"}>
                                        Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes
                                        toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow
                                        pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                                        claw.
                                    </span>
                                    <h1 className={"text-red-500 font-bold text-lg self-end pr-2 mt-auto"}>Club status</h1>
                                </div>
                            </VerticalCard>
                        </Fragment>

                    ))
                }
            </div>
        </div>
    );
};

export default PendingEvents;