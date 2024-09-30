import HeroSectio from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Credentials from "../Credentials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";


export default function Home(){
    return(
        <>
        <HeroSectio />
        <MySkills />
        <MyPortfolio />
        <Credentials />
        <ContactMe /> 
        <Footer />
        </>
    );
}