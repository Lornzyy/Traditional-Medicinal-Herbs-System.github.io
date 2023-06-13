import React, { useState } from "react";


const Contact = () => {

    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("")


    const onSubmitForm = async e => {
        e.preventDefault();
            try {
                const body = { username, comment };
                const response = await fetch("http://localhost:5000/comments", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                window.location = "/contact"
            } catch (err) {
                console.error(err.message);
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
                <button className="signupBtn">Comment</button>
            </form>

        </>
    )
}


export default Contact;