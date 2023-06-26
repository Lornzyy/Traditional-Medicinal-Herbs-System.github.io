import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    const navRef = useRef();
    const {user, logOut} = UserAuth();

    const handleLogOut=async() =>{
        try {
            await logOut();
        } catch (err) {
            console.log(err);
        }
    }

    const toggleBtn= () => {
        navRef.current.classList.toggle("responsive_nav");

    }
    return (
            <div className="header">
                <div className="header--intro">
                <Link to="/"><img src={require("../images/logo.jpg")} className="logo" alt="App logo" /></Link>
                <h1 className="nav--header"><a href="/">Traditional Medicinal Herbs</a></h1>
                </div>
               
                <div>
                <FontAwesomeIcon
                    className="toggleBtn"
                    onClick={toggleBtn}
                    icon={faBars}
                />
                <nav className="additions" ref={navRef}>
                    <ul className="additions--ul">
                    <li className="additions--li homeBtn"><Link to="/" onClick={toggleBtn}>Home</Link></li>
                    <li className="additions--li"><Link to="/medicine" onClick={toggleBtn}>Medicine</Link></li>
                    <li className="additions--li"><Link to="/contact" onClick={toggleBtn}>Contact</Link></li>
                    </ul>
                    <Link to="/searchResults" onClick={toggleBtn}><button className="signupBtn">Search</button></Link>
                    
                    {user?.displayName ? (
                    <button className="signupBtn" onClick={handleLogOut}>LOG OUT</button> )
                    : (<Link to="/login" onClick={toggleBtn}><button className="signupBtn">LOG IN </button></Link>)
                    }
                    <FontAwesomeIcon
                        className="close-btn"
                        onClick={toggleBtn}
                        icon={faTimes}
                    />
                </nav>   
                </div>
            </div>

    )
}