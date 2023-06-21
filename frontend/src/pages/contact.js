import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {
    faTwitter,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("")


    const onSubmitForm = async e => {
        e.preventDefault();
            try {
                const body = { username, comment };
                await fetch("http://localhost:5000/comments", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                window.location = "/contact"
            } catch (err) {
                console.error(err.message);
            }
    }

    function handleClick(){
        if (comment && username !== null){
            alert("Thank you for your comment")
        } else {
            alert("Try again")
        }
    }
    return (
        <>
            <h1 className="mt-3 text-center text-white">Add Comment</h1>
            <p className="mb-3 text-center font-italic text-white">
                Send a comment if you have any additional information on the traditional medicinal herbs from the Kikuyu community
                posted here.
            </p>
            <form onSubmit={onSubmitForm} className="contact-form">
                <label htmlFor="username"><strong>Name:</strong></label>
                <input type="text" 
                placeholder="Enter your username" 
                name="name" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="comment"><strong>Comment:</strong></label>
                <textarea type="text" 
                placeholder="Enter your comment..." 
                name="comment" 
                value={comment}
                onChange={e => setComment(e.target.value)}
                />
                <button className="signupBtn" onClick={handleClick}>Comment</button>
            </form>

            <h4 className="mb-3 text-center font-italic text-white">
                You can contact me through the following social media
            </h4>
            <div className="social-icons">
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

        </>
    )
}


export default Contact;