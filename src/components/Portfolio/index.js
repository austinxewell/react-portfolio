import React from "react";
import techBlogImg from "../../assets/portfolio/techblog-homepage.jpg"
import gitNShapeImg from "../../assets/portfolio/git-n-shape.jpg"
import weatherDashboardImg from "../../assets/portfolio/weather-dashboard.jpg"
import budgetTrackerImg from "../../assets/portfolio/budget-tracker.jpg"

function Portfolio() {

    return(
        <section>
            <h2 className="mx-2">What I have acomplished</h2>
            <p className="mx-1">My portfolio is created in react and is designed to give a brief showcase of my work as well as my ability to create SPA's with up-to-date technology.<br/><br/><i>Please note:</i>  All links on this page will navigate you to a new tab.</p>
            <container className="flex-row  cardContainer">
                <div className="projectCard">
                    <ul>
                        <li><h3>Tech Blog</h3></li>
                        <li><a className="repoLink" href="https://github.com/austinxewell/tech-blog" target="_blank">Repository Link:</a>
                        <p className="projectDescription">Tech Blog, a full Stack application designed to work as a blog site for all tech related issues. You can log in, post, and comment on posts. Data is stored and pulled from a SQL DB. </p></li>
                    </ul>
                    <a href="https://warm-cliffs-74985.herokuapp.com/" target="_blank"><img alt="Tech-Blog" src={techBlogImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Git-N-Shape</h3></li>
                        <li><a className="repoLink" href="https://github.com/austinxewell/git-n-shape" target="_blank">Repository:</a>
                        <br/>
                        <p className="projectDescription">Git-N-Shape, a full Stack project designed to pull data from a web API to help generate a workout routine and meal plan for someone starting their fitness experience. Plans can be saved to your local storage.</p></li>
                    </ul>
                    <a href="https://austinxewell.github.io/git-n-shape/" target="_blank"><img alt="Git-N-Shape" src={gitNShapeImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Weather Dashboard</h3></li>
                        <li><a className="repoLink" href="https://github.com/austinxewell/weather-dashboard" target="_blank">Repository</a>
                        <br/>
                        <p className="projectDescription">Weather Dashboard, a project designed to display the use of the moment package, pulling data from a web API, storing data to the local host, while also making local host data a reusable search history.</p></li>
                    </ul>
                    <a href="https://austinxewell.github.io/weather-dashboard/" target="_blank"><img alt="Weather Dashboard" src={weatherDashboardImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Budget Tracker</h3></li>
                        <li className="repoLink"><a className="repoLink" href="https://github.com/austinxewell/Budget-Tracker-PWA" target="_blank">Repository</a>
                        <br/>
                        <p className="projectDescription">Budget Tracker, a PWA application that will work offline and update when connection is established. You are able to name your transaction and track wether it adds or subtracts funds to your budget plan.</p></li>
                    </ul>
                    <a href="https://sleepy-beach-30576.herokuapp.com/" target="_blank"><img alt="Budget Tracker" src={budgetTrackerImg} className="portfolio-img mx-2"></img></a>
                </div>
            </container>
        </section>
    )
}

export default Portfolio;