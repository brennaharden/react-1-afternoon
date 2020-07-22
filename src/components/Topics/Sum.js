import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange (val){
        this.setState({
            number1: val
        })
    }
    handleChange2 (val){
        this.setState({
            number2: val
        })
    }
    addUp(number1, number2) {
        this.setState({
            sum: (+number1 + +number2)
        })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value)}/>
                <button className="confirmationBox" onClick={() => (this.addUp(this.state.number1, this.state.number2))}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;