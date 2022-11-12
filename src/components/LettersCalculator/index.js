// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onEnter = event => {
    const {value} = event.target
    this.setState({count: value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="desc">
            <h1 className="heading">Calculate the Letters you Enter</h1>

            <label className="phrase" htmlFor="phrases">
              Enter the phrase
            </label>
            <input
              type="text"
              id="phrases"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.onEnter}
            />

            <div className="count-contain">
              <p className="count">No.of letters: {count.length}</p>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
