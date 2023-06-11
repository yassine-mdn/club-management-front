import Sidebar from "../../../components/sidebar/index.jsx";
import {
    Archive24Filled,
    ChevronDown24Filled,
    PeopleAudience24Filled,
    Sleep24Filled
} from "@fluentui/react-icons";
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
                    <NavLink to={"club-list"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <PeopleAudience24Filled/>
                        <h6 className={""}>List</h6>
                    </NavLink>
                    <NavLink to={"pending-clubs"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <Archive24Filled/>
                        <h6 className={"flex items-center pb-1"}>Pending</h6>
                    </NavLink>
                </div>

                <div className={"flex gap-2 mx-2 items-center"}>
                    <ChevronDown24Filled className={"pt-1"}/>
                    <span className={"font-bold text-2xl"}>Events</span>
                </div>
                <div>
                    <NavLink to={"event-list"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <Sleep24Filled/>
                        <h6 className={""}>List</h6>
                    </NavLink>
                    <NavLink to={"pending-events"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <Archive24Filled/>
                        <h6 className={"flex items-center pb-1"}>Pending</h6>
                    </NavLink>
                </div>
            </Sidebar>
            <div className={"ml-72 p-12 h-screen"}>
                <Outlet/>
            </div>
        </>
    );
};

export default PersonnelContainer;