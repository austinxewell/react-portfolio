import React from "react";
import resumeTxt from "../../assets/download/AustinEwellResume2021.txt"
import resumeDocx from "../../assets/download/AustinEwellResume2021.docx"
import resumePdf from "../../assets/download/AustinEwellResume2021.pdf"
import proficienciesTxt from "../../assets/download/AustinEwellProficiencies2021.txt"
import proficienciesDocx from "../../assets/download/AustinEwellProficiencies2021.docx"
import proficienciesPdf from "../../assets/download/AustinEwellProficiencies2021.pdf"




function Resume() {
    return(
        <div>
            <h2 className="mx-2">Resume Info!</h2>
            <p className="mx-1">Thank you so much for taking the time to check out my online portfolio!<br/><br/>
            I'd love the oppertunity to discuss ideas and future career moves. I have provided downloadable links to my resume and a list of my developer proficiencies.</p>
            <ul>
                <li><a className="resumeLi" href={resumePdf} download>Resume (.pdf)</a></li>
                <li><a className="resumeLi" href={resumeDocx} download>Resume (.docx)</a></li>
                <li><a className="resumeLi" href={resumeTxt} download>Resume (.txt)</a></li>
                <li><a className="resumeLi" href={proficienciesPdf} download>Proficiencies (.pdf)</a></li>
                <li><a className="resumeLi" href={proficienciesDocx} download>Proficiencies (.docx)</a></li>
                <li><a className="resumeLi" href={proficienciesTxt} download>Proficiencies (.txt)</a></li>
            </ul>
        </div>
    )
}

export default Resume;