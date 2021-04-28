import React from "react"
import { useState, useRef } from 'react'

export default function Water() {
    let [time, setTime] = useState(false)
    let timeRef = useRef(null)

    let waterAmount = () => {
        if (timeRef.current.value === "30") {
            setTime(true)
        } else if (timeRef.current.value === "60") {
            setTime(true)
        } else if (timeRef.current.value === "90") {
            setTime(true)
        } else if (timeRef.current.value === "120") {
            setTime(true)
        } else {
            setTime(false)
        }
    }
    
    return (
        <>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }} >Amount of water to drink</p>
            
            {!time ?
                <>
                    <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Enter amount of time you are going to exercise:</p>
                    <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }} >(Enter 30, 60, 90, 120 minutes)</p>
                    <input ref={timeRef} style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}></input>
                    <button onClick={() => waterAmount()} style={{ "margin": "3px", "font-family": "courier" }}>Minutes</button>
                </>
                : undefined}
            {time ?
                <>
                    <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>20 gallons of water</p>
                </>
            : undefined }
        </>
    )
    
}