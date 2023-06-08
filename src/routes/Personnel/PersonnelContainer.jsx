import Sidebar from "../../components/sidebar/index.jsx";
import {Archive24Regular, ChevronDown24Filled} from "@fluentui/react-icons";
import {NavLink, Outlet} from "react-router-dom";

const PersonnelContainer = () => {
    return (
        <>
            <Sidebar>
                <div className={"flex gap-2 mx-2 items-center"}>
                    <ChevronDown24Filled className={"pt-1"}/>
                    <span className={"font-bold text-2xl"}>Clubs</span>
                </div>
                <div>
                    <NavLink to={"/admin"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <Archive24Regular/>
                        <h6 className={""}>List</h6>
                    </NavLink>
                    <NavLink to={"/pending-clubs"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <Archive24Regular/>
                        <h6 className={"flex items-center pb-1"}>Pending</h6>
                    </NavLink>
                </div>

                <div className={"flex gap-2 mx-2 items-center"}>
                    <ChevronDown24Filled className={"pt-1"}/>
                    <span className={"font-bold text-2xl"}>Events</span>
                </div>
                <div>
                    <NavLink to={"/event-list"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <Archive24Regular/>
                        <h6 className={""}>List</h6>
                    </NavLink>
                    <NavLink to={"/pending-events"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <Archive24Regular/>
                        <h6 className={"flex items-center pb-1"}>Pending</h6>
                    </NavLink>
                </div>
            </Sidebar>
            <div className={"ml-72 p-6"}>
                <Outlet/>
            </div>
        </>
    );
};

export default PersonnelContainer;