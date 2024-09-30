export default function Credentials(){
    return(
        <section className="credentials--container" id="Credetials">
            <div className="credentials--container--heading">
            <h2 className="skills--section--heading">
                My<span style={{color: 'white'}}>Qualifications</span>
            </h2>
        </div>
        <div className="card--container--credentials">
        <div className="credentials--card">
            <h3>Sandip Institute of Technology, & Research Center, Nashik.</h3>
            <h3 className="education--title">Bachelor of Engineering - Information
            Technology</h3>
            <p className="text-md" >CGPA : 8.10 / 10</p>
            <p className="text-sm">2019-2023</p>
        </div>
        <div className="credentials--card">
        <h3>DVMH, Sangamner, Savitribai Phule University, Pune.</h3>
            <h3 className="education--title">HSC</h3>
            <p className="text-md">GRADE: 66.92%</p>
            <p className="text-sm">2018-2019</p>
        </div>
  
        </div>
        <div className="card--container--credentials">
        <div className="credentials--card">
            <h3>DVMH, Sangamner, Savitribai Phule University, Pune.
            </h3>
            <h3 className="education--title">SSC</h3>
            <p className="text-md">GRADE: 76.80%</p>
            <p className="text-sm">2016-2017</p>
        </div>
        </div>

        </section>
    )
    
}