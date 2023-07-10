import React, { useEffect, useState } from "react"

function Main(){

    const [herbs, setHerbs] = useState([]);
    const getHerbs = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/allHerbs");
            const jsonData = await response.json();
            setHerbs(jsonData)
        } catch (err) {
            console.error(err.message);
        }

    }

    useEffect(() => {
        getHerbs();
    }, []);

    return (
        <div className="main">
                    {herbs.map(herb => (
                        <div className="herb" key={herb.id}>
                            <div className="herb--card">
                                <img src={require(`../images/${herb.imageurl}.jpg`)} className="herb--img" alt="herbs"/>
                                <h3 className="herb--name">{ herb.kikuyuname }</h3>
                                <p className="herb--part"><em>Part used is the</em> {herb.part}</p>
                                <p className="herb--description"><em>Preparation: </em>{herb.preparationmethod}</p>
                                <p className="herb--instruction"><em>Administer: </em>{herb.administermethod}</p>
                                <p className="herb--disease"><em>Disease:</em> {herb.disease}</p>
                            </div>
                        </div>
                    ))}

        </div>

    )
}


export default Main;