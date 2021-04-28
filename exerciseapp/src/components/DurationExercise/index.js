import React from "react"
import Stopwatch from "../Stopwatch"

export default class DurationExercise extends React.Component {
    render() {
        return (
            <>
                <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>{this.props.name}</p>
                <Stopwatch></Stopwatch>
            </>
        )
    }
}