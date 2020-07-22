import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput : '',
            palindrome : ''
        }
    }

    handleChange (val){
        this.setState({
            userInput: val
        })
    }

    checker(userInput) {
        let outcome = ''
        let word = userInput.split("").reverse().join("")
        word === userInput ? outcome = 'true' : outcome = 'false'
        this.setState ({
            palindrome: outcome
        })
    }

    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.checker(this.state.userInput)}}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;