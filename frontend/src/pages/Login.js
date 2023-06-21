import React, { useEffect } from "react";
import { GoogleButton} from "react-google-button";
import { UserAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const  Login = () =>{

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async() =>{
        try {
            await googleSignIn();
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        if (user != null){
            navigate('/login');
            
        }
    }, [user]);

    return (
       <>
            {
               user != null ?<h1 className="m-3 text-center text-white text-capitalize">
                Welcome, {user?.displayName}</h1> :<h1 className="m-3 text-center text-white text-capitalize">
                Log in to view the traditional medicinal Herbs</h1>
            }
            {
            user == null ? <GoogleButton className="googleBtn" onClick={handleGoogleSignIn}/>: <p></p>
            } 
       </>
    )
}

export default Login;