import React from "react";
import resumeTxt from "../../assets/download/AustinEwellResume2021.txt"
import resumeDocx from "../../assets/download/AustinEwellResume2021.docx"
import resumePdf from "../../assets/download/AustinEwellResume2021.pdf"





function Resume() {
    return(
        <div>
            <p className="mx-2">Thank you so much for taking the time to check out my online portfolio!<br/><br/>
            I'd love the oppertunity to discuss ideas and future career moves. I have provided downloadable links to my resume and a list of my developer proficiencies.</p>
            <ul>
                <li><a href={resumePdf} download>Resume (.pdf)</a></li>
                <li><a href={resumeDocx} download>Resume (.docx)</a></li>
                <li><a href={resumeTxt} download>Resume (.txt)</a></li>
            </ul>
        </div>
    )
}

export default Resume;