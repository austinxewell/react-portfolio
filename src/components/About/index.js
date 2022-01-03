import React from "react";
import aviImg from "../../assets/about/avi.jpg"

function About() {
    return (
        <section className="flex-row mx-2 aboutWrapper">
            <div>
                <img className="avatar" src={aviImg}></img>
                <h2>Who I Am and What I'm About!</h2>
                
                <p><span className="specialNotes">Professional Side:</span><br />I am a Natural leader. I have the ability to communicate information and ideas clearly and concisely with verbal and written precision. I am adept at reading and understanding information presented in maps, charts, plans, and blueprints. My negotiation techniques and methods are both strong and professional. I possess the ability to deal with people in a manner which shows professionalism, tact, and sensitivity. I speak with conviction, clearly and concisely. I am very effective at listening and understanding information and ideas as presented verbally or nonverbally. I can review and/or edit documents for accuracy and completeness. I am very strong at leading the work of others by monitoring, reviewing, training, taking the reins, and coordinating activities and tasks in the workplace. I am a very strong believer in "leading by example".<br/><br />
                
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