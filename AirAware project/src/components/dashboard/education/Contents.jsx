import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Lodder from './Lodder';
const Contents = ({ topics, lang }) => {
    const [videodata, setVideodata] = useState([])
    const [lodding, setLodding] = useState(true)
    const [playvideo, setPlayvideo] = useState('')


    /* extract id */
    function extractYouTubeID(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
    const videoId = extractYouTubeID(playvideo);
    // console.log(videoId);
    const playvideoid = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

    useEffect(() => {
        setLodding(true)
        fetch(`https://yt-search-xpf0.onrender.com/search?q=${topics}%20news%20 videos in ${lang}&limit=20`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setVideodata(data?.searchResults)
                setLodding(false)
            })

    }, [lang, topics])



    const Playvideoshandler = (url) => {
        setPlayvideo(url)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }




    return (
        <>
            <div className='w-full h-auto xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse flex  flex-col-reverse gap-4 justify-center  p-4 '>
                {
                    playvideo && (
                        <>
                            <iframe
                                className='xl:w-[80%] xl:h-[550px] w-full h-[300px]'
                                src={playvideoid}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="Video"
                            ></iframe>
                            <RxCross1 className='text-2xl font-bold xl:ml-4 lg:ml-4 md:ml-4 sm:ml-4 text-red-700 cursor-pointer' onClick={() => setPlayvideo('')} title='close' />
                        </>
                    )
                }

            </div>
            {

                lodding ? (<Lodder />) : (

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 '>
                        {videodata?.map((data, index) => (
                            <>
                                <div key={index} onClick={() => Playvideoshandler(data.url)} className='w-full h-[250px] cursor-pointer rounded-md overflow-hidden bg-white shadow-sm'>
                                    <img className=' w-full h-[200px]' src={data?.thumbnail} alt={data?.title} />
                                    <p className='text-[14px] p-2'>{data?.title}</p>
                                </div>
                            </>
                        ))}
                    </div>

                )



            }
        </>
    )
}

export default Contents

