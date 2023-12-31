import React, { useState, useContext } from 'react'
import { MovieContext } from '../../context/Movie.context';
import PaymentModal from '../PaymentModal/Payment.Component';

const MovieInfo = ({ movie }) => {

    const { isOpen, setIsOpen, price, setPrice, rentMovie, buyMovie } = useContext(MovieContext);

    const genres = movie.genre?.map(({ name }) => name).join(",");
    const languages = movie.spoken_languages?.map(({ english_name }) => english_name).join(", ");

    return (
        <>
            < PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-8 ml-10" >
                <h1 className='text-white text-5xl font-bold'>
                    {movie.original_title}
                </h1>
                <div className="text-white flex flex-col gap-2">
                    <h4>Languages : {languages}</h4>
                    <h4>4K Rating</h4>
                    <h4>Released : {movie.release_date} </h4>
                    <h4>{movie.runtime} min | {genres} </h4>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <button onClick={rentMovie} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Rent ₹ 299
                    </button>
                    <button onClick={buyMovie} className="bg-red-700 w-full py-3 text-white font-semibold rounded-lg">
                        Buy ₹ 499
                    </button>
                </div>
            </div>
        </>
    )
}

export default MovieInfo