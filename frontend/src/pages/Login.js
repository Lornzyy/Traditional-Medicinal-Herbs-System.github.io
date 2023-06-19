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
            navigate('/medicine');
        }
    }, [user]);

    return (
       <>
            <h1 className="m-3 text-center text-white text-capitalize">
                Log in to view the traditional medicinal Herbs
            </h1>
            <p>Welcome, {user?.displayName}</p>
           <GoogleButton className="googleBtn" onClick={handleGoogleSignIn}/>
       </>
    )
}

export default Login;