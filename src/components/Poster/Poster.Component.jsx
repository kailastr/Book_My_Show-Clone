import React from "react";
//to create links we want to import link
import { Link } from "react-router-dom";

const Poster = (props) => {
    return (
        // since we want the entire div to act as a link we could make a Link tag
        <Link to={`/movie/${props.id}`}>
            <div className="flex flex-col items-start gap-2 px-1 md:px-3">
                <div className="h-40 md:h-80 ">
                    <img
                        src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                        alt="Cinema Poster"
                        className="w-full h-full rounded-md"
                    />
                </div>
                <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.title}
                </h3>
                <p className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    Rating : {`${props.vote_average}`}
                </p>
            </div>
        </Link>
    )
}

export default Poster;