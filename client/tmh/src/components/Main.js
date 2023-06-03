import React, { Fragment, useEffect, useState } from "react"

function Main(){

    const [herbs, setHerbs] = useState([]);
    const getHerbs = async() => {
        try {
            const response = await fetch("http://localhost:5000/herbs");
            const jsonData = await response.json();

            setHerbs(jsonData)
        } catch (err) {
            console.error(err.message);
        }

    }

    useEffect(() => {
        getHerbs();
    }, []);

    console.log(herbs);
    return (
        <div className="main">
                    {herbs.map(herb => (
                        <div className="herb">
                            <div className="herb--card">
                                <img src={require(`../images/${herb.imageurl}.jpg`)} className="herb--img" alt="herbs"/>
                                <h3 className="herb--name">{ herb.kikuyuname }</h3>
                                <p className="herb--part">Part used is the {herb.part}</p>
                                <p className="herb--description">{herb.preparationmethod}</p>
                                <p className="herb--instruction">{herb.administermethod}</p>
                                <p className="herb--disease">Used to cure {herb.disease}</p>
                            </div>
                        </div>
                    ))}
        </div>

    )
}


export default Main;