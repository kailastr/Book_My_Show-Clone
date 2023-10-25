import React from 'react'
import DefaultLayoutHoc from "../Layout/Default.layout"
//component
import PlaysFilter from '../components/PlaysFilter/PlaysFilter.Component'
import Poster from '../components/Poster/Poster.Component'

const PlayPage = () => {
    return (
        <>
            <div className='container mx-auto px-4 my-10'>
                <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
                    <div className='lg:w-3/4 p-4 bg-gray-100 rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Plays in Kochi</h2>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367998-zgzfqxzbtx-portrait.jpg"
                                    title="IIMF- International Indie Music Festival"
                                    subtitle="Classical, Folk, Fusion, Indie, Jazz, Pop, Reggae, Rock | English | 4hrs"
                                    isPlay={true}
                                    HrefLink="https://in.bookmyshow.com/events/international-independent-music-festival/ET00367998"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00372334-hzwpmbcvll-portrait.jpg"
                                    title="1M Night"
                                    subtitle="EDM, Fusion, Pop, Rap, Trance | English, Malayalam, Hindi | 3yrs + | 6hrs 40mins"
                                    isPlay={true}
                                    HrefLink="https://in.bookmyshow.com/events/1m-night/ET00372334"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IE5vdg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00371623-shvykdbdua-portrait.jpg"
                                    title="db Night By Flowers"
                                    subtitle="Classical, Folk, Fusion, Indie, Jazz, Pop, Reggae, Rock | English | 4hrs"
                                    isPlay={true}
                                    HrefLink="https://in.bookmyshow.com/events/db-night-by-flowers-cochin/ET00371623"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00369125-nuhdtyvtpz-portrait.jpg"
                                    title="Exposure Math - Capture Any Photography Genre"
                                    subtitle="Classical, Folk, Fusion, Indie, Jazz, Pop, Reggae, Rock | English | 4hrs"
                                    isPlay={true}
                                    HrefLink="https://in.bookmyshow.com/events/exposure-math-capture-any-photography-genre/ET00369125"
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317751-vjreeypgys-portrait.jpg"
                                    title="Data Science with Python Programming"
                                    subtitle="Classical, Folk, Fusion, Indie, Jazz, Pop, Reggae, Rock | English | 4hrs"
                                    isPlay={true}
                                    HrefLink="https://in.bookmyshow.com/events/data-science-with-python-programming/ET00317751"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayoutHoc(PlayPage);