import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
        unFilteredArray: ['Flynn', 'Tove', 'Nike', 'Roger', 'Howl'],
        userInput: '',
        filteredArray: []
        }
    }

    handleChange (val){
        this.setState({
            userInput: val
        })
    }

    filterThings(userInput) {
        let userArray = this.state.unFilteredArray.filter(function(elem){
            return elem.startsWith(userInput)
        })
        this.setState ({
            filteredArray: userArray
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.filterThings(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;