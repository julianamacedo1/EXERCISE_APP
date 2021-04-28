import React from "react"
import { useState, useRef } from 'react'

export default function TotalExercise() {
    let [workoutTime, setWorkoutTime] = useState(false)
    let [feedback, setFeedback] = useState(false)
    let workoutRef = useRef(null)

    let exerciseTime = () => {
        if (workoutRef.current.value > 30) {
            setWorkoutTime(true)
            setFeedback(false)
        } else if (workoutRef.current.value < 30) {
            setWorkoutTime(true)
            setFeedback(true)
        } else if (workoutRef.current.value === 30) {
            setWorkoutTime(true)
            setFeedback(false)
        } else {
            setWorkoutTime(false)
        }
    }

    return (
        <>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Total workout time</p>
            {!workoutTime ?
                <>
                    <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Enter amount of time you exercised:</p>
                    <input ref={workoutRef} style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}></input>
                    <button onClick={() => exerciseTime()} style={{ "margin": "3px", "font-family": "courier" }}>Minutes</button>
                </>
                : undefined}
            {workoutTime ?
                <>
                    {! feedback ?
                        <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Good job, you did it!</p>
                    : undefined}
                    
                    {feedback ?
                        <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Workout a little longer!</p>
                    : undefined}
                </>
                : undefined}
        </>
    )

}