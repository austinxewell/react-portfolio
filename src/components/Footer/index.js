import React from "react";
import gitHubIcon from "../../assets/icons/github.png"
import linkedInIcon from "../../assets/icons/linkedin.png"

function Footer () {
    return(
        <footer>
            <div className="iconLayout">
                <a href="https://github.com/austinxewell" target="_blank"><img className="icon" src={gitHubIcon}></img></a>
                <a href="https://www.linkedin.com/in/austin-ewell-01a60313a/" target="_blank"><img className="icon" src={linkedInIcon}></img></a>
                <div className="copyright">
                    &copy;2021 Austin Ewell
                </div>
            </div>

          
        </footer>
    )
}

export default Footer;