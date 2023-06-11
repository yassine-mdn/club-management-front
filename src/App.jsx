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


function App() {


    return (
        <Routes>
            <Route path={"/"} element={<UserContainer/>}>
                <Route index element={<Home/>}/>
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
        </Routes>
    )
}

export default App
