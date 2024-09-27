import React from 'react'
import Asthma from "../../images/asthma.png"
import Allergies from "../../images/hives.png"
import Heart from '../../images/heart.png'
import Heat from "../../images/sweating.png"
import Dehydration from "../../images/sun.png"
import Hypothermia from "../../images/cold.png"

const DiseaseCard = () => {
    return (
        <>
            <div className='w-full h-auto bg-[#F5F7FA]  grid grid-cols-1 gap-4 md:grid-cols-4 p-4'>

                <div className='p-6 bg-white shadow-sm rounded-lg  flex flex-col justify-center items-center  gap-4'>
                    <img className='w-[80px] h-[80px]' src={Asthma} alt='Asthma.png' />
                    <p className='text-center'>Approximately 339 million people worldwide suffer from asthma (source: WHO).</p>
                </div>
                <div className=' bg-white shadow-sm rounded-lg flex flex-col justify-center items-center p-6 gap-4'>
                    <img className='w-[80px] h-[80px]' src={Heart} alt='Heart.png' />
                    <p className='text-center'>Cardiovascular diseases cause 17.9 million deaths yearly. A 10 µg/m³ rise in PM2.5 increases heart disease risk by 5-10%.</p>
                </div>
                <div className=' bg-white shadow-sm rounded-lg flex flex-col justify-center items-center p-6 gap-4'>
                    <img className='w-[80px] h-[80px]' src={Allergies} alt='Allergies.png' />
                    <p className='text-center'>Allergic rhinitis affects 10-30% of the global population, or about 1.5 to 4.5 billion people.</p>
                </div>
                <div className=' bg-white shadow-sm rounded-lg flex flex-col justify-center items-center p-6 gap-4'>
                    <img className='w-[80px] h-[80px]' src={Heat} alt='Heat.png' />
                    <p className='text-center'>Heat-related illnesses cause over 300 deaths annually in the U.S. (source: CDC).</p>
                </div>
                <div className=' bg-white shadow-sm rounded-lg flex flex-col justify-center items-center p-6 gap-4'>
                    <img className='w-[80px] h-[80px]' src={Hypothermia} alt='Hypothermia.png' />
                    <p className='text-center'>Hypothermia causes about 1,000 deaths annually in the U.S. due to prolonged exposure to cold temperatures (source: CDC).</p>

                </div>
                <div className=' bg-white shadow-sm rounded-lg flex flex-col justify-center items-center p-6 gap-4'>
                    <img className='w-[80px] h-[80px]' src={Dehydration} alt='Dehydration.png' />
                    <p className='text-center'>Dehydration affects about 1.5 million people globally each year (source: WHO).</p>
                </div>

            </div>
        </>
    )
}

export default DiseaseCard;
