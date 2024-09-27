import React from 'react'
import Nav from '../components/layout/Nav';
import Hero from '../components/home/Hero';
import DiseaseCard from '../components/home/DiseaseCard';
import Feature from '../components/home/Feature';
import ImpactSection from '../components/home/ImpactSection';
import HelpSection from '../components/home/HelpSection';
import Footer from '../components/layout/Footer';
const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <DiseaseCard/>
            <Feature/>
            <ImpactSection/>
            <HelpSection/>
            <Footer/>
        </>
    )
}

export default Home
