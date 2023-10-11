//use of useState is to store list of details of movies
import React, { useEffect, useState } from 'react'
//import axios to get request from MovieDB
import axios from 'axios';
//importing other components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
//importing the layout
import DefaultLayoutHoc from "../Layout/Default.layout";

const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        //create an async function to save all the datas from the MovieDB url
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=1163f15eca11a47a8c4b993ac3fb77be");

            setRecommendedMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    return (
        <>
            <HeroCarousal />
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className='container mx:auto px-4 md:px-12 my-8'>
                <PosterSlider
                    title="Recommended Movies"
                    subtitle="List of recommended movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>

            <div className='bg-premier-800 py-12'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Rupay"
                            className='w-full h-full' />
                    </div>
                    <PosterSlider
                        title="Premiers"
                        subtitle="Brand New releases every friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider
                    title="Online streaming event"
                    subject=""
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>

        </>
    )
}

export default DefaultLayoutHoc(HomePage);