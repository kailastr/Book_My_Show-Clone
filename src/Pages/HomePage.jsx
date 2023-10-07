import React, { useState } from 'react'
//importing other components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
//importing the layout
import DefaultLayoutHoc from "../Layout/Default.layout";

const HomePage = () => {
    return (
        <div>HomePage</div>
    )
}

export default DefaultLayoutHoc(HomePage);