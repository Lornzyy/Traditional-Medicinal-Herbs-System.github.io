import React from "react";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";


function Home(){

    return (
        <div className="container">
            <h1 className="text-center m-2">Traditional Medicinal Herbs </h1>
            <p className="text-justify text-white mb-5 mt-5">
                This Traditional Medicinal Herbs System displays the traditional medicinal herbs collected in the 
                Kihara area, Kiambaa constituency, Kiambu County in Kenya from the Kikuyu Community.
                This study will benefit the Kikuyu community and other communities in Kenya as they will
                have access to available traditional medicinal herbs remedies, which is easier to utilise 
                other than borrowing from other countries. This will remove language and geographical barriers 
                from the local Kenyan communities. Increasing the utilisation of tacit knowledge will reduce 
                the costs of treating illnesses and preventive measures using traditional herbal medicine. 
                Additionally, the younger generation will be able to utilise this traditional medicinal herbs 
                information as they do not have any experience with traditional medicinal herbs which will be 
                a first for them and ease their usage for them.

            </p>
            <div className="m-auto">
            <ImageSlider/>
            <button className="signupBtn mx-auto get-started"> <a href="/signup">CHECK IT OUT</a></button>
            </div>

            <Footer/>

        </div>

    )
}


export default Home;


