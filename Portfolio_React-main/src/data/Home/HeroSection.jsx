import { useNavigate } from 'react-router-dom'
import profile from '../../assets/profile.png'
export default function HeroSection() {
    const navigate=useNavigate();
    return (
       
        <section id="HeroSection" className="hero--section">
              <div className="hero--section--img">
    
                   
                   <img src={profile} alt="hero section" />


       </div>
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title ">
                        Hey, I am
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            CHAITANYA
                        </span>{" "}
                        <br />
                        UMBARKAR
                    </h1>
                    <p className="hero--section--description">

                        A Full-Stack Developer.

                    </p>


                </div>
                <button className="btn btn-github">
                    <a  href="https://drive.google.com/file/d/17bZHLAyRNL1ajZwQWQz7tZRo4EPFluP_/view?usp=sharing">Resume</a>
                </button>

            </div>
          

        </section>
    )

}