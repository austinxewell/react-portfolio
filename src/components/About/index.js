import React from "react";
import aviImg from "../../assets/about/avi.jpg"

function About() {
    return (
        <section className="flex-row mx-2 aboutWrapper">
            <div>
                <img className="avatar" src={aviImg}></img>
                <h2>Who I Am and What I'm About!</h2>
                
                <p><span className="specialNotes">Professional Side:</span><br />I am a driven, self motivated Full Stack Web Developer who strives to become the best version of myself. I have a certificate in Full Stack Web Development from the University of Utah's Coding Bootcamp, this helped hone my skills in JavaScript, CSS, React.js, responsive web design, and much more. Colleagues from my projects Git-N-Shape, Full Stack Marketplace, and adoptABLE, have described me as adaptable, flexible, independent, motivated, organized, passionate, and a problem-solver. I amalgamate all of these strengths to leverage my ability to collaborate on projects and build balanced and functional designs with a mobile-first design approach. I strive to not only create top quality applications, but top quality connections with everyone I am fortunate enough to come across. I am a firm believer in leading my example.<br/><br />
                
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
                <p className="mx-1"><span id="personSide" className="specialNotes">Personal Side:</span><br/>
                I am not your average nerd. I am the type of person who is just as ecstatic spending hours in front of my machine as I am going to the skatepark. I love basically anything outdoors. Let the sun shine on my skin and fill my heart with warmth. I would call myself an adrenaline junkie, but I feel that as I grow older that doesn't reign as true. Don't think that won't stop me from jumping off a cliff into a lake, throwing myself down some stairs at the skatepark, or trying the cool new hip invention my 8 year old daughter finds at school. I love music, everything about it. I mostly listen to hardcore/punk, but there isn't anything I wont play on my spotify playlists. I can play many instruments, but I gravitate to the guitar.</p>
                <p className="mx-1">I spent my pre-teens shredding the parks by day and staying up way too late creating the coolest designs for my MySpace profile by night. That's really where my love for coding and computer sciences took off. You see, I was born in the early 90's, and wasn't that a crazy time to be born. I've seen the populus transition from landlines, to flip phones, to smartphones, to portable PCs. I've watched as we went from a society that didn't have technology in the average home to having it become a necessity. I've had the incredible opportunity to sit back and watch as computer sciences expand and create. The world we live in is a fast paced environment and I believe technology only fuels that fire. I love being a factor that contributes to progress.</p>
            </div>
        </section>
    )
}

export default About;