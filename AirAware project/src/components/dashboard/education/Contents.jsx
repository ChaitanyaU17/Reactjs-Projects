import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Lodder from './Lodder';
const Contents = ({ topics, lang }) => {
   
    const [playvideo, setPlayvideo] = useState('')






    return (
        <>
            <div className='w-full h-auto xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse flex  flex-col-reverse gap-4 justify-center  p-4 '>
                {
                    playvideo && (
                        <>
                           
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
                                <div key={index} onClick={() => (data.url)} className='w-full h-[250px] cursor-pointer rounded-md overflow-hidden bg-white shadow-sm'>
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

