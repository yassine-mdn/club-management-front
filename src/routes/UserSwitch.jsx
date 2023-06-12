import {NavLink} from "react-router-dom";
import {Button} from "@fluentui/react-components";


const UserSwitch = () => {
    return (
        <div className={"h-screen w-screen grid place-content-center"}>

            <div className={"flex flex-col gap-4"}>
                <NavLink to={"/admin/club-list"}>
                    <Button size={"large"} appearance={"primary"} className={"w-48"}>Admin</Button>
                </NavLink>
                <NavLink to={"/prof/club-list"}>
                    <Button size={"large"} appearance={"primary"} className={"w-48"}>Prof</Button>
                </NavLink>
                <NavLink to={"/president/club-members"}>
                    <Button size={"large"} appearance={"primary"} className={"w-48"}>President</Button>
                </NavLink>
                <NavLink to={"/student/create"}>
                    <Button size={"large"} appearance={"primary"} className={"w-48"}>Student</Button>
                </NavLink>

            </div>

        </div>
    );
};

export default UserSwitch;