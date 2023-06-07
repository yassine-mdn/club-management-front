import './App.css'
import Home from "./routes/Visitor/Home.jsx";
import {Route, Routes} from "react-router-dom";
import UserContainer from "./routes/Visitor/UserContainer.jsx";
import ClubList from "./routes/Visitor/ClubList.jsx";
import EventList from "./routes/Visitor/events/EventList.jsx";
import EventDetails from "./routes/Visitor/events/EventDetails.jsx";


function App() {


    return (
        <Routes>
           <Route path={"/"} element={<UserContainer/>}>
               <Route index element={<Home/>}/>
               <Route path={"/clubs"} element={<ClubList/>}/>

               <Route path={"/events"}>
                   <Route index element={<EventList/>}/>
                   <Route path={":id"} element={<EventDetails/>}/>
               </Route>

           </Route>

        </Routes>
    )
}

export default App
