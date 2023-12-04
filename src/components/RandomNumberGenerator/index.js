import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  randomGenerator = () => {
    this.setState({count: Math.floor(Math.random() * 101)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.randomGenerator}
          >
            Generate
          </button>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
