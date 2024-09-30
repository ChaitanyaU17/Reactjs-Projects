import coats from '../../assets/profile-pic__5_-removebg-preview.png'

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section" >
            <div className="about--section--img">
                <img src={coats} alt="img" />

            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        About
                    </p>
                    <h1 className="skills--section--heading">
                        About Me
                    </h1>
                    <p className="hero--section--description">
                    As an aspiring frontend developer,With a solid understanding of HTML, CSS, JavaScript, React JS and Tailwind allowing me to craft responsive.
                    </p>
                    <p className="hero--section--description">
                        I am eager to further my knowledge by diving into frontend Toolkit like Reduxjs and contributing to real-world projects.

                    </p>

                </div>

            </div>
        </section>
    );
}