import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childColor: '#FFF'
    }
  }

  changeColor = (newColor) => {
    this.setState({
      color: getRandomColor(),
      childColor: newColor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childColor} colorChange={this.changeColor}/>
        <Child color={this.state.childColor} colorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
