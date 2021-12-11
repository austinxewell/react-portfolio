import React from "react";
import techBlogImg from "../../assets/portfolio/techblog-homepage.jpg"
import gitNShapeImg from "../../assets/portfolio/git-n-shape.jpg"
import weatherDashboardImg from "../../assets/portfolio/weather-dashboard.jpg"
import budgetTrackerImg from "../../assets/portfolio/budget-tracker.jpg"
import fullStackMarketplaceImg from "../../assets/portfolio/fullStackMarketplace.jpg"
import employeeTrackerImg from "../../assets/portfolio/employeeTrackerImg.jpg"

function Portfolio() {

    return(
        <section>
            <h2 className="mx-2">A Small Taste of My Accomplishments!</h2>
            <p className="mx-1">My portfolio is created in react and is designed to give a brief showcase of my work as well as my ability to create SPA's with up-to-date technology. Please feel free to checkout my GitHub repositories as well as my deployed applications.<br/><br/><span className="specialNotes">Please note:</span> All links on this page will navigate you to a new tab.</p>
            <div className="flex-row  cardContainer">
                <div className="projectCard">
                    <ul>
                        <li><h3>Tech Blog</h3></li>
                        <li><a className="repoLink" href="https://github.com/austinxewell/tech-blog" target="_blank">-Repository Link-</a>
                        <p className="projectDescription">Tech Blog, a full Stack application designed to work as a blog site for all tech related issues. You can log in, post an issue, and comment on other users posts. Data is stored and pulled from a SQL DB. </p></li>
                    </ul>
                    <a href="https://warm-cliffs-74985.herokuapp.com/" target="_blank"><img alt="Tech-Blog" src={techBlogImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Git-N-Shape</h3></li>
                        <li><a className="repoLink" href="https://github.com/austinxewell/git-n-shape" target="_blank">-Repository Link-</a>
                        <br/>
                        <p className="projectDescription">Git-N-Shape, a full Stack project designed to pull data from a web API to help generate a workout routine and meal plan for someone starting their fitness experience. Plans can be saved to your local storage.</p></li>
                    </ul>
                    <a href="https://austinxewell.github.io/git-n-shape/" target="_blank"><img alt="Git-N-Shape" src={gitNShapeImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Weather Dash</h3></li>
                        <li><a className="repoLink" href="https://github.com/austinxewell/weather-dashboard" target="_blank">-Repository Link-</a>
                        <br/>
                        <p className="projectDescription">Weather Dash, this project is designed to display the use of the moment package, pulling data from a web API, storing data to the local host, while also making local host data a reusable search history.</p></li>
                    </ul>
                    <a href="https://austinxewell.github.io/weather-dashboard/" target="_blank"><img alt="Weather Dashboard" src={weatherDashboardImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Budget Track</h3></li>
                        <li className="repoLink"><a className="repoLink" href="https://github.com/austinxewell/Budget-Tracker-PWA" target="_blank">-Repository Link-</a>
                        <br/>
                        <p className="projectDescription">Budget Tracker is a PWA application that will work offline and update when connection is established. You are able to name your transaction and track wether it adds or subtracts funds to your budget plan.</p></li>
                    </ul>
                    <a href="https://sleepy-beach-30576.herokuapp.com/" target="_blank"><img alt="Budget Tracker" src={budgetTrackerImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>FS Market</h3></li>
                        <li className="repoLink"><a className="repoLink" href="https://github.com/austinxewell/Full-Stack-Marketplace" target="_blank">-Repository Link-</a>
                        <br/>
                        <p className="projectDescription">Budget Tracker is a PWA application that will work offline and update when connection is established. You are able to name your transaction and track wether it adds or subtracts funds to your budget plan.</p></li>
                    </ul>
                    <a href="https://mysterious-garden-73946.herokuapp.com/" target="_blank"><img alt="Full Stack Marketplace" src={fullStackMarketplaceImg} className="portfolio-img mx-2"></img></a>
                </div>

                <div className="projectCard">
                    <ul>
                        <li><h3>Emp Tracker</h3></li>
                        <li className="repoLink"><a className="repoLink" href="https://github.com/austinxewell/employee-tracker" target="_blank">-Repository Link-</a>
                        <br/>
                        <p className="projectDescription">Employee Tracker is a SQL DB command line application designed to help create structure in your employee/company data. You can create, delete, change, and modify relations all in a command line setting.</p></li>
                    </ul>
                    <a href="https://watch.screencastify.com/v/ZK4D21GFZMwdPbj6QopQ" target="_blank"><img alt="Employee Tracker" src={employeeTrackerImg} className="portfolio-img mx-2"></img></a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;