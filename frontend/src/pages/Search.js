import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(){

    const [searchValue, setSearchValue] = React.useState("");
    const [returnHerb, setReturnHerb] = React.useState([]);

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/herb/?value=${searchValue}`);

            const parseResponse = await response.json();
            setReturnHerb(parseResponse);
            
            

        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
           <form className="form-control" onSubmit={onSubmitForm}>
                <input type="search" placeholder="Search Herb/Disease....." className="search-bar" value={searchValue}
                    onChange={e =>{setSearchValue(e.target.value)}}/>
                <FontAwesomeIcon icon={faSearch} onClick={onSubmitForm}/>
            </form>
            
                <div className="main">
                {returnHerb.map(herb => (
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
        </>
    )
}


export default Search;