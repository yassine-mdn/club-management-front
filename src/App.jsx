import './App.css'
import Home from "./routes/Visitor/Home.jsx";
import {Route, Routes} from "react-router-dom";
import UserContainer from "./routes/Visitor/UserContainer.jsx";
import ClubList from "./routes/Visitor/ClubList.jsx";


function App() {


    return (
        <Routes>
           <Route path={"/"} element={<UserContainer/>}>
               <Route index element={<Home/>}/>
               <Route path={"/clubs"} element={<ClubList/>}/>
           </Route>

        </Routes>
    )
}

export default App
