import React, { useState, useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import MovieInfo from "./MovieInfo.Component";

const MovieHero = () => {

    const { movie } = useContext(MovieContext);

    //to get the list of genres
    const genres = movie.genres?.map(({ name }) => name).join(",");
    const languages = movie.spoken_languages?.map(({ english_name }) => english_name).join(",");

    return (
        <>
            <div className="">
                {/* small and medium sizes */}
                <div className="lg:hidden w-full">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="Movie Poster"
                        className="m-4 rounded"
                        style={{ width: "calc(100% - 2rem)" }}
                    />
                </div>
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black flex flex-col gap-2 md:px-4">
                            <h4>Languages : {languages}</h4>
                            <h4>4K Rating</h4>
                            <h4>Released : {movie.release_date} </h4>
                            <h4>{movie.runtime} min | {genres} </h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹ 299
                        </button>
                        <button className="bg-red-700 w-full py-3 text-white font-semibold rounded-lg">
                            Buy ₹ 499
                        </button>
                    </div>
                </div>


                {/* Large screen Hero section */}
                <div className="relative hidden lg:block w-full" style={{ height: "30rem" }}>
                    <div
                        className="absolute z-10 w-full h-full"
                        style={{
                            backgroundImage: "linear-gradient(90deg, rgb(7, 8, 8) 0%, rgb(74, 74, 74) 25%, rgba(122, 121, 121, 0.7) 50%, rgba(161, 161, 161, 0.3) 75%, rgba(252, 252, 252, 0.1) )"
                        }}
                    />
                    <div className="absolute z-30 left-24 top-10 flex items-center">
                        <div className="w-64 h-96">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" className="w-full h-full rounded-lg" />
                        </div>
                        <div>
                            <MovieInfo movie={movie} />
                        </div>
                    </div>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="Movie Poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    )
};

export default MovieHero;