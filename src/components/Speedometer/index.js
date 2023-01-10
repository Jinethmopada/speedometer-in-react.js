// Write your code here
import {Component} from 'react'

import './index.css'

class SpeedMeter extends Component {
  state = {count: 0}

  onAcc = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onBrk = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img"
            alt="speedometer"
          />
        </div>
        <h1 className="speed">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn-1" type="button" onClick={this.onAcc}>
            Accelerate
          </button>
          <button className="btn-2" type="button" onClick={this.onBrk}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default SpeedMeter
