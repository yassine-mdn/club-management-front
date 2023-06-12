import {useState} from "react";
import {Button} from "@fluentui/react-components";
import {NavLink, useNavigate} from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="flex items-center justify-between flex-wrap p-1 px-12 h-16 shadow-lg bg-white/60 backdrop-blur-lg fixed top-0 w-full z-50">
            <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
                <NavLink to={"/"}>
                    <img
                        alt={"logo"}
                        className={" h-12 w-12 rounded-md"}
                        src={"https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png"}
                    />
                </NavLink>

            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-screen block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
                <div className="text-sm flex gap-4">
                    <NavLink to={"/clubs"} className={({isActive}) => (isActive ? 'active-nav' : 'normal-nav')}>
                        <span>
                            clubs
                        </span>
                    </NavLink>
                    <NavLink to={"/events"} className={({isActive}) => (isActive ? 'active-nav' : 'normal-nav')}>
                        <span>
                            Events
                        </span>
                    </NavLink>

                </div>
                <div className={"ml-auto"}>
                    <Button appearance="primary" onClick={()=> navigate("/switch-user")}> Login</Button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;