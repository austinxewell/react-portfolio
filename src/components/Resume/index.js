import React from "react";
import resumeTxt from "../../assets/download/AustinEwellResume2021.txt"
import resumeDocx from "../../assets/download/AustinEwellResume2021.docx"
import resumePdf from "../../assets/download/AustinEwellResume2021.pdf"
import proficienciesTxt from "../../assets/download/AustinEwellProficiencies2021.txt"
import proficienciesDocx from "../../assets/download/AustinEwellProficiencies2021.docx"
import proficienciesPdf from "../../assets/download/AustinEwellProficiencies2021.pdf"




function Resume() {
    return(
        <div className='resumeWrapper'>
            <h2 className="mx-2 resumeHeader">Resume Info!</h2>
            <p className="outroText">Thank you so much for taking the time to check out my online portfolio!<br/><br/>
            I'd love the oppertunity to discuss ideas and future career moves. I have provided downloadable links to my resume and a list of my developer proficiencies.</p>

            <div class="dropdown">
                <button class="dropbtn">Resume</button>
                    <div class="dropdown-content">
                        <a className="resumeLi" href={resumePdf} download>.PDF</a>
                        <a className="resumeLi" href={resumeDocx} download>.DOCX</a>
                        <a className="resumeLi" href={resumeTxt} download>.TXT</a>
                    </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Proficiencies</button>
                    <div class="dropdown-content">
                        <a className="resumeLi" href={proficienciesPdf} download>.PDF</a>
                        <a className="resumeLi" href={proficienciesDocx} download>.DOCX</a>
                        <a className="resumeLi" href={proficienciesTxt} download>.TXT</a>
                    </div>
            </div>
        </div>
    )
}

export default Resume;