import './App.css'
import Home from "./routes/Visitor/Home.jsx";
import {Route, Routes} from "react-router-dom";
import UserContainer from "./routes/Visitor/UserContainer.jsx";
import ClubList from "./routes/Visitor/clubs/ClubList.jsx";
import EventList from "./routes/Visitor/events/EventList.jsx";
import EventDetails from "./routes/Visitor/events/EventDetails.jsx";
import ClubDetails from "./routes/Visitor/clubs/ClubDetails.jsx";
import PersonnelContainer from "./routes/Personnel/common/PersonnelContainer.jsx";
import ClubTable from "./routes/Personnel/admin/ClubTable.jsx";
import EventTable from "./routes/Personnel/admin/EventTable.jsx";
import PendingClubs from "./routes/Personnel/admin/PendingClubs.jsx";
import PendingEvents from "./routes/Personnel/admin/PendingEvents.jsx";
import ClubDetailsPers from "./routes/Personnel/common/ClubDetailsPers.jsx";
import EventDetailsPers from "./routes/Personnel/common/EventDetailsPers.jsx";
import LoginPage from './routes/Visitor/LoginPage';
import ClubCreateFrom from './routes/Visitor/clubs/ClubCreateFrom';
import UserSwitch from "./routes/UserSwitch.jsx";
import ClubTableProf from "./routes/Personnel/prof/ClubTableProf.jsx";
import PendingClubsProf from "./routes/Personnel/prof/PendingClubsProf.jsx";
import PendingEventsProf from "./routes/Personnel/prof/PendingEventsProf.jsx";
import EventTableProf from "./routes/Personnel/prof/EventTableProf.jsx";
import PresidentContainer from "./routes/President/PresidentContainer.jsx";
import MembersList from "./routes/President/MembersList.jsx";
import ClubProfile from "./routes/President/ClubProfile.jsx";
import ClubEdit from "./routes/President/ClubEdit.jsx";
import ClubEventList from "./routes/President/ClubEventList.jsx";
import CurrentEvent from "./routes/President/CurrentEvent.jsx";
import CreateEvent from "./routes/President/CreateEvent.jsx";
import EventEdit from "./routes/President/EventEdit.jsx";


function App() {


    return (
        <Routes>
            <Route path={"/"} element={<UserContainer/>}>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route index element={<Home/>}/>
                <Route path={"/createClub"} element={<ClubCreateFrom/>}/>
                <Route path={"/clubs"}>
                    <Route index element={<ClubList/>}/>
                    <Route path={":id"} element={<ClubDetails/>}/>
                </Route>
                <Route path={"/events"}>
                    <Route index element={<EventList/>}/>
                    <Route path={":id"} element={<EventDetails/>}/>
                </Route>
            </Route>
            <Route path={"/admin"} element={<PersonnelContainer/>}>
                <Route path={"club-list"}>
                    <Route index element={<ClubTable/>}/>
                    <Route path={":id"} element={<ClubDetailsPers/>}/>
                </Route>
                <Route path={"pending-clubs"} >
                    <Route index element={<PendingClubs/>}/>
                    <Route path={":id"} element={<ClubDetailsPers/>}/>
                </Route>
                <Route path={"event-list"}>
                    <Route index element={<EventTable/>}/>
                    <Route path={":id"} element={<EventDetailsPers/>}/>
                </Route>
                <Route path={"pending-events"}>
                    <Route index element={<PendingEvents/>}/>
                    <Route path={":id"} element={<EventDetailsPers/>}/>
                </Route>
            </Route>
            <Route path={"/prof"} element={<PersonnelContainer/>}>
                <Route path={"club-list"}>
                    <Route index element={<ClubTableProf/>}/>
                    <Route path={":id"} element={<ClubDetailsPers/>}/>
                </Route>
                <Route path={"pending-clubs"} >
                    <Route index element={<PendingClubsProf/>}/>
                    <Route path={":id"} element={<ClubDetailsPers/>}/>
                </Route>
                <Route path={"event-list"}>
                    <Route index element={<EventTableProf/>}/>
                    <Route path={":id"} element={<EventDetailsPers/>}/>
                </Route>
                <Route path={"pending-events"}>
                    <Route index element={<PendingEventsProf/>}/>
                    <Route path={":id"} element={<EventDetailsPers/>}/>
                </Route>
            </Route>
            <Route path={"/president"} element={<PresidentContainer/>}>
               <Route path={"club-members"} element={<MembersList/>}/>
                <Route path={"club-details"}>
                    <Route index element={<ClubProfile/>}/>
                    <Route path={"edit"} element={<ClubEdit/>}/>
                </Route>
                <Route path={"event-list"}>
                    <Route index element={<ClubEventList/>}/>
                    <Route path={":id"} element={<EventEdit/>}/>
                </Route>
                <Route path={"current-events"}>
                    <Route index element={<CurrentEvent/>}/>
                    <Route path={":id"} element={<EventEdit/>}/>
                </Route>
                <Route path={"create-event"} element={<CreateEvent/>}/>
            </Route>
            <Route path={"/switch-user"} element={<UserSwitch/>}/>
        </Routes>
    )
}

export default App
