import React, { useState, useEffect, useContext } from 'react'
import MovieLayoutHoc from "../Layout/Movie.layout";
//to get parameters from the url 
import { useParams } from 'react-router-dom';
import axios from 'axios';
//to use the context we want to import the context file
import { MovieContext } from '../context/Movie.context';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa';
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from '../components/MovieHero/MovieHero.Component';
import CastComponent from '../components/Cast/CastComponent';

const MoviePage = () => {

    const { id } = useParams();

    // to use context variables
    const { movie, setMovie } = useContext(MovieContext);

    const [cast, setCast] = useState([]);
    const [SimiliarMovie, setSimiliarMovie] = useState([]);
    const [RecommendedMovies, setRecommendedMovie] = useState([]);

    //useEffect to get the casts
    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };

        requestCast();
    }, [id]);

    //for similiar movies
    useEffect(() => {
        const requestSimiliarMovies = async () => {
            const getSimiliarMovies = await axios.get(`/movie/${id}/similar`);
            setSimiliarMovie(getSimiliarMovies.data.results);
        };

        requestSimiliarMovies();
    }, [id]);

    //for recommended movies
    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovie(getRecommendedMovies.data.results);
        };

        requestRecommendedMovies();
    }, [id]);

    // for about movie
    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        }

        requestMovie();
    }, [id]);

    //for cast section
    const settingsCast = {
        infite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 1,
        responsive: [
            {
                breakPoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakPoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakPoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const settings = {
        infite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 1,
        responsive: [
            {
                breakPoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakPoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakPoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    return (
        <>
            {/* <MovieHero /> w:2/3 */}
            <MovieHero />
            <div className='my-12 container px-4 lg:ml-20 lg:w-2/1'>

                {/* about the movie */}
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-gray-800 font-bold text-2xl'>
                        About the movie
                    </h1>
                    <p>
                        {movie.overview}
                    </p>
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/* offers section */}
                <div className='my-8'>
                    <h2 className='text-gray-800 font-bold text-2xl mb-3'>
                        Applicable Offers
                    </h2>
                    <div className='flex flex-col gap-3 lg:flex-row'>
                        <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
                            <div className='w-8 h-8'>
                                <FaCcVisa className='w-full h-full' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-gray-700 text-xl font-bold'>
                                    Visa Stream Offer
                                </h3>
                                <p className='text-gray-500'>
                                    Get 50% off upto INR 150 on all RuPay Cards* on BookMyShow Stream
                                </p>
                            </div>
                        </div>

                        <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
                            <div className='w-8 h-8'>
                                <FaCcApplePay className='w-full h-full' />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-gray-700 text-xl font-bold'>
                                    Film Pass
                                </h3>
                                <p className='text-gray-500'>
                                    Get 50% off upto INR 150 on all Apple Pay* on BookMyShow Stream
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/* cast and crew slider */}
                <div className='my-8'>
                    <h2 className='text-gray-800 font-bold text-2xl mb-4'>
                        Cast and Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {cast.map((castData) => (
                            <CastComponent
                                image={castData.profile_path}
                                castName={castData.original_name}
                                role={castData.character}
                            />
                        ))}
                    </Slider>
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/* recommended movies slider */}
                <div className='my-8'>
                    <PosterSlider
                        config={settings}
                        title='Similiar Movies'
                        posters={SimiliarMovie}
                        isDark={false}
                    />
                </div>

                <div className='my-8'>
                    <hr />
                </div>

                {/* recommended movies slider */}
                <div className='my-8'>
                    <PosterSlider
                        config={settings}
                        title='Recommended Movies'
                        posters={RecommendedMovies}
                        isDark={false}
                    />
                </div>
            </div>
        </>
    )
}

export default MovieLayoutHoc(MoviePage);