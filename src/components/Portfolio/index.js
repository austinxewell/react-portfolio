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
            <p className="mx-1">All deployed project links will open in a new tab.</p>
            <div className="flex-row">
                <a href="https://warm-cliffs-74985.herokuapp.com/" target="_blank"><img alt="Tech-Blog" src={techBlogImg} className="portfolio-img mx-2"></img></a>
                <a href="https://austinxewell.github.io/git-n-shape/" target="_blank"><img alt="Git-N-Shape" src={gitNShapeImg} className="portfolio-img mx-2"></img></a>
                <a href="https://austinxewell.github.io/git-n-shape/" target="_blank"><img alt="Git-N-Shape" src={weatherDashboardImg} className="portfolio-img mx-2"></img></a>
            </div>

            <section>
                <h1>{currentCategory.name}</h1>
                <p>{currentCategory.description}</p>
            </section>
        </section>
    )
}

export default Portfolio;