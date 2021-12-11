import React from "react";
import Project from "../Projects";
import projects from "../Projects/projects.json";

function Portfolio() {

    return(
        <section>
            <h2 className="mx-2">A Small Taste of My Accomplishments!</h2>
            <p className="mx-1">My portfolio is created in react and is designed to give a brief showcase of my work as well as my ability to create SPA's with up-to-date technology. Please feel free to checkout my GitHub repositories as well as my deployed applications.<br/><br/><span className="specialNotes">Please note:</span> All links on this page will navigate you to a new tab.</p>
            <div className="flex-row  cardContainer">
                {projects.map((project) => (
                    <Project 
                        name={project.name}
                        repoLink={project.repoLink}
                        description={project.description}
                        deployLink={project.deployLink}
                        imgAlt={project.imgAlt}
                        imgName={project.imgName}
                    />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;