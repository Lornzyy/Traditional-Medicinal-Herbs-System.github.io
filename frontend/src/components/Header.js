import React from "react"
import { Link} from "react-router-dom"

export default function Header(){

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
            <div className="header">
                <div className="header--intro">
                <img src={require("../images/logo.jpg")} className="logo" alt="App logo" />
                <h1 className="nav--header"><a href="/">Traditional Medicinal Herbs</a></h1>
                </div>
                <div className="additions" >

                    <ul className="additions--ul">
                    <li className="additions--li"><Link to="/medicine">Medicine</Link></li>
                    <li className="additions--li"><Link to="/contact">Contact</Link></li>
                    </ul>
                    <form onSubmit={onSubmitForm}>
                        <input type="search" placeholder="Search Herb/Disease..." className="search-bar" value={searchValue}
                            onChange={e =>{setSearchValue(e.target.value)}}
                        />
                    </form>
                    <button className="signupBtn"><Link to="/signup">SIGN UP</Link></button>
                </div>
            </div>

    )
}