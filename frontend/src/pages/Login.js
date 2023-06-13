import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return (
       <>
            <h1 className="m-3 text-center text-white text-capitalize">
                Sign in to view the traditional medicinal Herbs
            </h1>

            <form className="contact-form">
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" placeholder="Enter your email..." name="email" />
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="password" placeholder="*******" name="password" />

                <button className="signupBtn">Sign In</button>
            </form>

            <p className="m-3 text-center text-white">
                Don't have an account <Link to="/signup" className="text-black">Sign Up!</Link>
            </p>
       </>
    )
}

export default Login;