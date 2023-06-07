import PropTypes from "prop-types";

const ImageCard = (props) => {
    return <div className={"h-32  lg:h-56 xl:h-64 aspect-video object-cover  rounded-lg drop-shadow-lg relative group "} onClick={props.handleClick}>
        <div
            style={{backgroundImage: `url(${props.img})`}}
            className={"h-full w-full bg-center bg-cover  rounded-lg "}>
        </div>
        <div
            className="hidden  absolute top-0 h-full w-full  bg-black/30  rounded-lg group-hover:flex justify-center items-center cursor-pointer text-white">
            <span className={"font-semibold text-lg"}> {props.title} </span>
        </div>
    </div>;
};

ImageCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleClick : PropTypes.func.isRequired,
}

export default ImageCard;
