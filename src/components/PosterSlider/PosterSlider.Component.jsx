import React from "react";
//importing slider
import Slider from "react-slick";
//importing poster
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {

    const { posters, title, subtitle, isDark, config } = props;

    const settings = {
        infinite: true,
        autoPlay: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            { //a breakpoint for 1024px screen
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false
                }
            },
            { //a breakpoint for 600px screen
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            { //a breakpoint for 480px screen
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    };

    return (
        <>
            <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
                {/* we could check conditions inside a className by writing the names inside a backticks */}
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {subtitle}
                </p>
            </div>
            <Slider {...settings}>
                {posters.map((each, index) => (
                    <Poster {...each} isDark={isDark} key={index} />
                ))}
            </Slider>
        </>
    )
}

export default PosterSlider;