import data from "../../data/index.json";

export default function MyPortfolio(){
    return(
    <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box" >
                <div className="portfolio--container" >
                    <h2 className="skills--section--heading">
                        Recent <span style={{color: 'white'}}>Project</span>
                    </h2>
                </div>
                <div>
                    <button className="btn btn-github">
                         <a href="https://github.com/ChaitanyaU17">Github profile</a>
                    </button>

                </div>

            </div>
            <div className="portfolio--section--container "  >
                {data?.portfolio?.map((item,index)=>(
                    <div key={index}
                    className="portfolio--section--card"
                    
                    >
                        <div className="portfolio--section--img" >
                            <img src={item.src} alt="img"  />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div className="port">
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                <p className="portfolio-section-p">
                                    {item.description}
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '50px'}}>
                            <a href= {item.link1} className="text-sm portfolio--link">
                               Live Demo
                            </a>
                            <a href= {item.link2} className="text-sm portfolio--link">
                               Github Code
                            </a>
                            </div>
                            
                        </div>
            
                </div>
                ))}
            </div>
    </section>
    )
}
