import React from 'react'
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();

    const dashbordredirectbtn = () => {
        navigate('/dashboard/weather')

    }
    const eductaiondashboardredirect = () => {

        navigate('/dashboard/education')

    }
    return (
        <>
            <div className='w-full h-[70vh] xl:h-[90vh] lg:h-[90vh] md:h-[90vh] sm:h-[90vh] bg-[#F5F7FA] flex '
                style={{
                    backgroundImage: `url(https://img.freepik.com/premium-photo/map-world-with-words-pink-blue_1002361-4631.jpg?w=1380)`,
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    backgroundSize: 'cover',
                }}
            >
                <div className='w-[100%] h-[100%] flex justify-center items-center' >

                    <div className='xl:w-[60%] lg:w-[60%] md:-[60%] w-full h-auto  flex flex-col gap-4 justify-center items-center' >
                        <h1 className='xl:text-6xl text-3xl font-bold text-center'>“Stay Informed , Stay <mark className='bg-green-400'>Safe</mark>”</h1>
                        <p className='text-2xl text-center'>Access accurate data to protect your health and make informed decisions. Stay informed, stay healthy, and ensure your well-being.</p>

                        <div className='w-full h-auto flex gap-4 items-center justify-center'>
                            <button onClick={dashbordredirectbtn} className='w-[150px] h-[40px] rounded-md dark:bg-gray-800 text-white  ' >Dashboard</button>
                            <button onClick={eductaiondashboardredirect} className='w-[150px] h-[40px] rounded-md dark:bg-gray-800 text-white  ' >Learn More</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero
