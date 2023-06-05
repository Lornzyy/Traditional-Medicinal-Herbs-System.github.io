import React from "react";
import ImageSlider from "../components/ImageSlider";


function Home(){

    return (
        <div className="container">
            <h1 className="text-center m-2">Traditional Medicinal Herbs </h1>
            <p className="strong">
                This Traditional Medicinal Herbs System displays the tradiitonal medicinal herbs collected in the 
                Kihara area, Kiambaa constituency, Kiambu County in Kenya from the Kikuyu Community.
            </p>
            <div className="m-auto">
            <ImageSlider/>
            <button className="signupBtn w-150"> <a href="/signup">CHECK IT OUT</a></button>

            </div>
        </div>

    )
}


export default Home;


