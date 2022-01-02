import React, {useState} from "react";

const Project = (props) => {
    const {
        name,
        repoLink,
        description,
        deployLink,
        imgAlt,
        imgName
    } = props;

    return (
        <div className="projectCard">
            <ul className="cardList">
                <li><h3>{name}</h3></li>
                <li className="repoLink"><a className="repoLink" href={repoLink} target="_blank">-Repository Link-</a>
                <br/>
                <p className="projectDescription">{description}</p></li>
            </ul>
            <a href={deployLink}target="_blank">
                <img alt={imgAlt}
                    src={require(`../../assets/portfolio/${imgName}.jpg`).default}
                    className="portfolio-img mx-2">
                </img></a>
        </div>
    )
}

export default Project;
