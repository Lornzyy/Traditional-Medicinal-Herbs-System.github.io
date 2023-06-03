import React from "react"

export default function Header(){

    const [searchValue, setSearchValue] = React.useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { searchValue };
            const response = await fetch("http://localhost:5000/herbs/value",{
                method: "GET",

            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="header">
            <img src={require("../images/logo.jpg")} className="logo" alt="App logo" />
            <h1 className="nav--header">Traditional Medicinal Herbs</h1>
            <form className="additions" onSubmit={onSubmitForm}>
                <input type="search" placeholder="Search Herb..." className="search-bar" value={searchValue}
                    onChange={e =>{setSearchValue(e.target.value)}}
                />
                <button className="signupBtn">Sign Up</button>
            </form>
        </div>
    )
}