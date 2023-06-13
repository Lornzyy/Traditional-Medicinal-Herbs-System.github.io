import React, {useState} from "react";
import {Link, Redirect, withRouter} from "react-router-dom";
import firebase from "../firebase";


export default function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const[routeRedirect, setRouteRedirect] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        console.log("Register user");
        <p>Welcome back {email}</p>

    }
    return (
        <>
            <h1 className="m-3 text-center text-white text-capitalize">
                Sign up to view the traditional medicinal Herbs
            </h1>
            <form onSubmit={onSubmit} className="contact-form">
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" placeholder="Enter your email..." name="email" 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="password" placeholder="*******" name="password" 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="password"><strong>Password Confirmation:</strong></label>
                <input type="password" placeholder="*******" name="password" 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit" className="signupBtn">Sign Up</button>
            </form>

            <p className="text-center text-white">
                Already have an account <Link to="/signin" className="text-black">Sign In!</Link>
            </p>
        </>
    )
}