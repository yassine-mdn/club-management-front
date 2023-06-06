import {
    ArrowLeft24Regular, ArrowRight24Regular,
} from "@fluentui/react-icons";
import {useState} from "react";
import PropTypes from "prop-types";


const Carousel = ({slides}) => {


    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='xl:h-[60rem] h-96 lg:h-[50rem] w-full py-2 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <ArrowLeft24Regular onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5  rounded-full p-2  bg-black/20 text-white cursor-pointer'>
                <ArrowRight24Regular onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                    </div>
                ))}
            </div>
        </div>
    );

};

Carousel.propTypes = {
    slides : PropTypes.arrayOf( PropTypes.shape({
        url: PropTypes.string.isRequired
    })).isRequired
};
export default Carousel;

