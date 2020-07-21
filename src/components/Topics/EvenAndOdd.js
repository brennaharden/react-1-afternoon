import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor (){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleChange (val){
        this.setState({
            userInput: val
        })
    }

    assignEvenAndOdds(userInput){
        let newArray = userInput.split(',')
        console.log(newArray)
        let evens = []
        let odds = []
        for (let i = 0; i < newArray.length; i++){
            if (newArray[i] % 2 === 0){
                evens.push(+newArray[i])
            } else {
                odds.push(+newArray[i])
            }
        }
        this.setState({
            oddArray: odds,
            evenArray: evens
        })
        
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Even and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;