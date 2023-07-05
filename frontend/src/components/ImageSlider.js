import React from "react"
import "react-slideshow-image/dist/styles.css"
import { Fade} from "react-slideshow-image"

function ImageSlider(){

    const slideImages =[
        {
            url: "http://localhost:3000/images/rosemary.jpg",
            caption: "Rosemary"

        },
        {
            url: "http://localhost:3000/images/thabai.jpg",
            caption: "Stinging Nettle"

        },
        {
            url: "http://localhost:3000/images/kiruma.jpg",
            caption: "Aloe Vera"

        }
    ]

    const divStyle ={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "380px",
        maxWidth: "85%",
        backgroundSize: "cover",
        borderRadius: "20px",
        backgroundPosition: "center",
        margin: "auto"
    }

    const spanStyle ={
        color: "white",
        fontSize: "40px",
        fontWeight: "600",
        transform: "translate(0, 250%)",
        textAlign: "center"
    }

    return (
        <>
            <div className="slide-container">
                <Fade>
                    {slideImages.map((image, index) =>(
                        <div key={index}>
                            <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                                <span style={spanStyle}>{image.caption}</span>

                            </div>
                        </div>
                    ))}
                </Fade>
            </div>
        </>
    )

}


export default ImageSlider;