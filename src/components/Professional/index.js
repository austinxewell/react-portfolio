import React from "react";
import aviImg from "../../assets/about/avi.png"

function Professional() {
    return (
        <section className="flex-row mx-2 aboutWrapper">
            <div>
                <img className="avatar" src={aviImg}></img>
                <h2>Professional Side:</h2>
                
                <p>I am a driven, self motivated Full Stack Web Developer who strives to become the best version of myself. I have a certificate in Full Stack Web Development from the University of Utah's Coding Bootcamp, this helped hone my skills in JavaScript, CSS, React.js, responsive web design, and much more. Colleagues from my projects Git-N-Shape, Full Stack Marketplace, and adoptABLE, have described me as adaptable, flexible, independent, motivated, organized, passionate, and a problem-solver. I amalgamate all of these strengths to leverage my ability to collaborate on projects and build balanced and functional designs with a mobile-first design approach. I strive to not only create top quality applications, but top quality connections with everyone I am fortunate enough to come across. I am a firm believer in leading by example.<br/><br />
                
                    <div className="contactCard">
                        <span id="proficiencies" className="specialNotes contactCard">Here are some of my work proficiencies:</span><br />
                        <div className="flex-row contactCard">
                            <ul>
                                <li>‣HTML, CSS, and GIT</li>
                                <li>‣JavaScript</li>
                                <li>‣Web APIs</li>
                                <li>‣Third-Party APIs</li>
                                <li>‣Server-Side APIs</li>
                                <li>‣Node.js</li>
                                <li>‣OOP</li>
                                <li>‣Express.js</li>
                                <li>‣SQL</li>
                            </ul>
                            <ul>
                                <li>‣ORM</li>
                                <li>‣MVC</li>
                                <li>‣NoSQL</li>
                                <li>‣Progressive Web Application</li>
                                <li>‣React</li>
                                <li>‣GraphQL</li>
                                <li>‣MERN</li>
                                <li>‣State</li>
                            </ul>
                        </div>
                    </div>
                </p>  
            </div>
        </section>
    )
}

export default Professional;