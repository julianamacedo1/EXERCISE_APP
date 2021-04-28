import React from "react"
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"
import RateExercise from "./components/RateExercise"
import Water from "./components/Water"
import TotalExercise from "./components/TotalExercise"

const MENU = "menu"
const REPETITION_EXERCISE = "repetition_exercise"
const DURATION_EXERCISE = "duration_exercise"
const RATE_EXERCISE = "rate_exercise"
const WATER = "water"
const TOTAL_EXERCISE = "total_exercise"

class MenuScreen extends React.Component {
  constructor(props) {
    super(props)
    let objects = [
      { id: 1, objType: "number", name: "Push Ups", value: 0, completed: false },
      { id: 2, objType: "timer", name: "Bicycling", completed: false },
      { id: 3, objType: "number", name: "Jumping Jacks", value: 0, completed: false },
      { id: 4, objType: "timer", name: "Running", completed: false },
      { id: 5, objType: "number", name: "Sit Ups", value: 0, completed: false }
    ]

    this.state = {
      currentScreen: MENU,
      selectedItem: undefined,
      currentObjects: objects,
      filterNumberedItems: false
    }
  }

  updateValue(newValue) {
    let propertyName = this.state.selectedItem.objType === "number" ? "value" : "timer"
    this.setState((prevState) => {
      let objectToUpdate = prevState.currentObjects.find(
        (obj) => obj === this.state.selectedItem
      )
      objectToUpdate[propertyName] = newValue
      return { currentObjects: this.state.currentObjects }
    })
  }

  completeItem = (itemId) => {
    this.setState((prevState) => {
      let prevList = prevState.currentObjects
      let itemIndex = prevList.findIndex((obj) => obj.id === itemId)
      prevList[itemIndex].completed = !prevList[itemIndex].completed
      return { currentObjects: prevList }
    })
  }

  render() {
    let screen
    switch (this.state.currentScreen) {
      case MENU:
        let filteredArray = this.state.filterNumberedItems
          ? this.state.currentObjects.filter(
            (item) => item.objType === "number"
          )
          : this.state.currentObjects
        screen = (
          <>
            <h2 style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Time To Get Fit!</h2>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Select an exercise:</p>
            <ul style={{ "padding": "5px", "list-style-type": "none" }}>
              {filteredArray.map((obj, index) =>
                <li key={index}>
                  <input
                    type="checkbox"
                    onChange={() => this.completeItem(obj.id)}
                    defaultChecked={obj.completed}
                  ></input>
                  <button
                    style={{ "margin": "3px", "font-family": "courier" }}
                    onClick={() =>
                      this.setState({
                        currentScreen:
                          obj.objType === "number"
                            ? REPETITION_EXERCISE
                            : DURATION_EXERCISE,
                        selectedItem: obj
                      })
                    }
                  >{obj.name}</button>
                </li>
              )}
            </ul>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Check off the exercises you completed</p>
            <button
              style={{ "margin": "3px", "font-family": "courier" }}
              onClick={() =>
                this.setState({
                  currentScreen: RATE_EXERCISE
                })
              }
            >Rate your workout</button>
            <button
              style={{ "margin": "3px", "font-family": "courier" }}
              onClick={() =>
                this.setState({
                  currentScreen: WATER
                })
              }
            >Amount of water to drink</button>
            <button
              style={{ "margin": "3px", "font-family": "courier" }}
              onClick={() =>
                this.setState({
                  currentScreen: TOTAL_EXERCISE
                })
              }
            >Total workout time</button>
          </>
        )
        break
      case REPETITION_EXERCISE:
        screen = (
          <>
            <RepetitionExercise
              {...this.state.selectedItem}
              updateValue={(value) => this.updateValue(value)}
            ></RepetitionExercise>
            <button onClick={() => this.setState({ currentScreen: MENU })}
              style={{ "margin": "3px", "font-family": "courier" }}
            >
              Back
            </button>
          </>
        )
        break
      case DURATION_EXERCISE:
        screen = (
          <>
            <DurationExercise
              {...this.state.selectedItem}
            ></DurationExercise>
            <button onClick={() => this.setState({ currentScreen: MENU })}
              style={{ "margin": "3px", "font-family": "courier" }}
            >
              Back
            </button>
          </>
        )
        break
      case RATE_EXERCISE:
        screen = (
          <>
            <div><RateExercise></RateExercise></div>
            <button onClick={() => this.setState({ currentScreen: MENU })}
              style={{ "margin": "3px", "font-family": "courier" }}
            >
              Back
            </button>
          </>
        )
        break
      case WATER:
        screen = (
          <>
            <div><Water></Water></div>
            <button onClick={() => this.setState({ currentScreen: MENU })}
              style={{ "margin": "3px", "font-family": "courier" }}
            >
              Back
            </button>
          </>
        )
        break
      case TOTAL_EXERCISE:
        screen = (
          <>
            <div><TotalExercise></TotalExercise></div>
            <button onClick={() => this.setState({ currentScreen: MENU })}
              style={{ "margin": "3px", "font-family": "courier" }}
            >
              Back
            </button>
          </>
        )
        break
      default:
        screen = undefined
    }
    return screen
  }
}

export default class App extends React.Component {
  render() {
    return <MenuScreen></MenuScreen>
  }
}