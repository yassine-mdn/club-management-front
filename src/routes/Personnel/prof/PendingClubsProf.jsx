import {Input, Title2} from "@fluentui/react-components";
import {Search20Filled} from "@fluentui/react-icons";

const PendingClubsProf = () => {


    return (
        <div className={"flex flex-col gap-4 h-full max-w-[80rem] overflow-y-scroll scrollbar-hide mx-auto"}>
            <div className={"mx-3 flex justify-between"}>
                <Input contentBefore={<Search20Filled/>} size={"large"} type={"search"}
                       style={{maxWidth: "800px", width: "600px"}}/>
            </div>
            <Title2>There are no current pending clubs</Title2>
        </div>
    );
};

export default PendingClubsProf;