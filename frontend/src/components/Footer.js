import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {
    faTwitter,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faInbox } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div>
            <hr className="hr"/>
            <div className="footer--pin">
           
            <p>
                ©{new Date().getFullYear()}
                <Link to="https://github.com/Lornzyy" target="_blank"> Lorna Mungai.
                </Link> All rights reserved.
            </p>
            <div className="social-icons">
            <span >
                <Link to="https://instagram.com/lonzzzzy" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon"/>Instagram
                </Link>
            </span>
            <span>
                <Link to="https://twitter.com/Lornzyy" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon"/>Twitter
                </Link>
            </span>
            <span>
                <Link to="https://github.com/Lornzyy" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />Github
                </Link>
            </span>
            <span>
                <Link to="https://lonzmungai@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faInbox} className="social-icon" />Email
                </Link>
            </span>
        </div>
        </div>
        </div>
    )
}


export default Footer;