import Sidebar from "../../components/sidebar/index.jsx";
import {
    AppsListDetail24Filled,
    CalendarClock24Filled,
    ChevronDown24Filled, People24Filled,
    StarAdd24Filled, StarEdit24Filled, StarLineHorizontal324Filled
} from "@fluentui/react-icons";
import {NavLink, Outlet} from "react-router-dom";

const PresidentContainer = () => {
    return (
        <>
            <Sidebar>
                <div className={"flex gap-2 mx-2 items-center"}>
                    <ChevronDown24Filled className={"pt-1"}/>
                    <span className={"font-bold text-2xl"}>Clubs</span>
                </div>
                <div>
                    <NavLink to={"club-details"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <AppsListDetail24Filled/>
                        <h6 className={""}>Details</h6>
                    </NavLink>
                    <NavLink to={"club-members"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <People24Filled/>
                        <h6 className={"flex items-center pb-1"}>Members</h6>
                    </NavLink>
                </div>

                <div className={"flex gap-2 mx-2 items-center"}>
                    <ChevronDown24Filled className={"pt-1"}/>
                    <span className={"font-bold text-2xl"}>Events</span>
                </div>
                <div>
                    <NavLink to={"event-list"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <StarLineHorizontal324Filled/>
                        <h6 className={""}>List</h6>
                    </NavLink>
                    <NavLink to={"current-events"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <StarEdit24Filled/>
                        <h6 className={"flex items-center pb-1"}>Current</h6>
                    </NavLink>

                    <NavLink to={"create-event"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <StarAdd24Filled/>
                        <h6 className={"flex items-center pb-1"}>Create</h6>
                    </NavLink>
                </div>
                <div className={"flex gap-2 mx-2 items-center"}>
                    <ChevronDown24Filled className={"pt-1"}/>
                    <span className={"font-bold text-2xl"}>Meeting</span>
                </div>
                <div>
                    <NavLink to={"meetings"} className={({ isActive }) => (isActive ? 'activeLink' : 'normalLink')}>
                        <CalendarClock24Filled/>
                        <h6 className={""}>Planned</h6>
                    </NavLink>
                </div>
            </Sidebar>
            <div className={"ml-72 p-12 h-screen"}>
                <Outlet/>
            </div>
        </>
    );
};

export default PresidentContainer;