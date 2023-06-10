import './App.css'
import Home from "./routes/Visitor/Home.jsx";
import {Route, Routes} from "react-router-dom";
import UserContainer from "./routes/Visitor/UserContainer.jsx";
import ClubList from "./routes/Visitor/clubs/ClubList.jsx";
import EventList from "./routes/Visitor/events/EventList.jsx";
import EventDetails from "./routes/Visitor/events/EventDetails.jsx";
import ClubDetails from "./routes/Visitor/clubs/ClubDetails.jsx";
import PersonnelContainer from "./routes/Personnel/PersonnelContainer.jsx";
import ClubTable from "./routes/Personnel/ClubTable.jsx";
import EventTable from "./routes/Personnel/EventTable.jsx";
import PendingClubs from "./routes/Personnel/PendingClubs.jsx";
import PendingEvents from "./routes/Personnel/PendingEvents.jsx";
import ClubDetailsPers from "./routes/Personnel/ClubDetailsPers.jsx";


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

                </Route>
                <Route path={"pending-events"}>
                    <Route index element={<PendingEvents/>}/>

                </Route>
            </Route>
        </Routes>
    )
}

export default App
