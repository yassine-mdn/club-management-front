import Navbar from "../../components/navbar/index.jsx";
import {Outlet} from "react-router-dom";

const UserContainer = () => {



    return (
        <>
            <Navbar/>
            <div className={"mt-20"}>
               <Outlet/>
                <footer className={"relative bottom-0 bg-blue-900 h-80 w-full mt-12"}>

                </footer>

            </div>

        </>
    );
};

export default UserContainer;