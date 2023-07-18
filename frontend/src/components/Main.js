import React, { useEffect, useState } from "react"
import { UserAuth } from "../context/authContext";
import { Link } from "react-router-dom";

function Main(){

    const {user, logOut} = UserAuth();
    const [herbs, setHerbs] = useState([]);

    const getHerbs = async() => {
        try {
            const response = await fetch("http://localhost:5000/allHerbs");
            const jsonData = await response.json();
            setHerbs(jsonData)
        } catch (err) {
            console.error(err.message);
        }

    }

    useEffect(() => {
        getHerbs();
    }, []);

    const handleLogOut = async() =>{
        try {
            await logOut();
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
        <div className="logOut">
        <Link to="/home">
            <button className="signupBtn logOutBtn" onClick={handleLogOut}> LOG OUT </button>
        </Link>
        </div>

        <div className="main">
            {herbs.map(herb => (
                <div className="herb" key={herb.id}>
                    <div className="herb--card">
                        <img src={require(`../images/${herb.imageurl}.jpg`)} className="herb--img" alt="herbs"/>
                        <h3 className="herb--name">{ herb.kikuyuname }</h3>
                        <p className="herb--part"><em>Part used: </em> {herb.part}</p>
                        <p className="herb--description"><em>Preparation: </em>{herb.preparationmethod}</p>
                        <p className="herb--instruction"><em>Administer: </em>{herb.administermethod}</p>
                        <p className="herb--disease"><em>Disease:</em> {herb.disease}</p>
                    </div>
                </div>
            ))}

        </div>
        </>

    )
}


export default Main;