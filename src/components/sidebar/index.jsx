import PropTypes from "prop-types";

const SideBar = (props) => {




    return (
        <div className={"fixed top-0 h-screen w-72 flex flex-col gap-4 py-8 border-l-2 border-gray-100 shadow-2xl bg-neutral-100"}>
            <img className={"h-20 w-20 aspect-square rounded-md self-center mb-8"}
                 alt={"logo"}
                 src={"https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png"}
            />

            {props.children}
        </div>
    );
};

SideBar.propTypes = {
    children : PropTypes.element.isRequired
}

export default SideBar;