import './App.css'
import Home from "./routes/Visitor/Home.jsx";
import {Route, Routes} from "react-router-dom";
import UserContainer from "./routes/Visitor/UserContainer.jsx";
import ClubList from "./routes/Visitor/clubs/ClubList.jsx";
import EventList from "./routes/Visitor/events/EventList.jsx";
import EventDetails from "./routes/Visitor/events/EventDetails.jsx";
import ClubDetails from "./routes/Visitor/clubs/ClubDetails.jsx";


function App() {


    return (
        <Routes>
           <Route path={"/"} element={<UserContainer/>}>
               <Route index element={<Home/>}/>
               <Route path={"/clubs"}>
                   <Route index  element={<ClubList/>}/>
                   <Route path={":id"} element={<ClubDetails/>}/>
               </Route>
               <Route path={"/events"}>
                   <Route index element={<EventList/>}/>
                   <Route path={":id"} element={<EventDetails/>}/>
               </Route>

           </Route>

        </Routes>
    )
}

export default App
