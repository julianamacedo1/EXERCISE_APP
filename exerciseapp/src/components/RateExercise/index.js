import React from "react"

export default function RateExercise() {

    return (
        <>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Rate your workout</p>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>1-5:</p>
            <button
                style={{ "margin": "3px", "font-family": "courier" }}
                onClick={() => alert("you rated your workout a 1 out of 5!")}
            >1</button>
            <button
                style={{ "margin": "3px", "font-family": "courier" }}
                onClick={() => alert("you rated your workout a 2 out of 5!")}
            >2</button>
            <button
                style={{ "margin": "3px", "font-family": "courier" }}
                onClick={() => alert("you rated your workout a 3 out of 5!")}
            >3</button>
            <button
                style={{ "margin": "3px", "font-family": "courier" }}
                onClick={() => alert("you rated your workout a 4 out of 5!")}
            >4</button>
            <button
                style={{ "margin": "3px", "font-family": "courier" }}
                onClick={() => alert("you rated your workout a 5 out of 5!")}
            >5</button>
        </>
    )
    
}