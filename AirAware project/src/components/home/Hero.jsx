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
           
        </>
    )
}

export default Hero
