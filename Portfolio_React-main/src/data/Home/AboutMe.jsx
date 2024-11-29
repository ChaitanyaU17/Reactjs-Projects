import coats from "../../assets/profile-pic__5_-removebg-preview.png";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={coats} alt="img" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            As an aspiring Full Stack developer,With a solid understanding of I am
            skilled in HTML, CSS, Tailwind, Bootstrap, JavaScript, React.js,
            Redux, Rest APIs, Firebase, Node.js, Express.js, MongoDB, and Java
            (DSA & OOP), with strong expertise in frontend and full-stack
            development. My ability to create responsive, efficient, and
            user-friendly web applications, combined with backend proficiency in
            building robust and scalable server-side solutions, allows me to
            deliver comprehensive web development projects effectively.
          </p>
          <p className="hero--section--description">
            I am eager to further my knowledge by diving into frontend Toolkit
            like Reduxjs and contributing to real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}
