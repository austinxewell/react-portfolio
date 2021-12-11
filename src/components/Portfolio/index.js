import React from "react";
import techBlogImg from "../../assets/portfolio/techblog-homepage.jpg"
import gitNShapeImg from "../../assets/portfolio/git-n-shape.jpg"
import weatherDashboardImg from "../../assets/portfolio/weather-dashboard.jpg"

function Portfolio(props) {

    const currentCategory = {
        name: "commercial",
        description:
          "Photos of grocery stores, food trucks, and other commercial projects",
    };

    return(
        <section>
            <h2 className="mx-2">What I have acomplished</h2>
            <p className="mx-1">Photos will navigate you to a new tab with the deployed application.</p>
            <div className="flex-row">
                <div className="projectCard">
                    <ul>
                        <li><h3>Tech Blog</h3></li>
                        <li><a href="https://github.com/austinxewell/tech-blog" target="_blank">Repository</a>
                        <p className="projectDescription">Tech Blog, a full Stack application designed to work as a blog site for all tech related issues. You can log in, post, and comment on posts. Data is stored and pulled from a SQL DB. </p></li>
                    </ul>
                    <a href="https://warm-cliffs-74985.herokuapp.com/" target="_blank"><img alt="Tech-Blog" src={techBlogImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Git-N-Shape</h3></li>
                        <li><a href="https://github.com/austinxewell/git-n-shape" target="_blank">Repository:</a>
                        <br/>
                        <p className="projectDescription">Git-N-Shape, a full Stack project designed to pull data from a web API to help generate a workout routine and meal plan for someone starting their fitness experience. Plans can be saved to your local storage.</p></li>
                    </ul>
                    <a href="https://austinxewell.github.io/git-n-shape/" target="_blank"><img alt="Git-N-Shape" src={gitNShapeImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Weather Dashboard</h3></li>
                        <li><a href="https://github.com/austinxewell/weather-dashboard" target="_blank">Repository</a>
                        <br/>
                        <p className="projectDescription">Weather Dashboard, a project designed to display the use of the moment package, pulling data from a web API, storing data to the local host, while also making local host data a reusable search history.</p></li>
                    </ul>
                    <a href="https://austinxewell.github.io/weather-dashboard/" target="_blank"><img alt="Weather Dashboard" src={weatherDashboardImg} className="portfolio-img mx-2"></img></a>
                </div>
            </div>

            <section>
                <h1>{currentCategory.name}</h1>
                <p>{currentCategory.description}</p>
            </section>
        </section>
    )
}

export default Portfolio;