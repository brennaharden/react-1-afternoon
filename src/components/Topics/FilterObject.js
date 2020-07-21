import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [{name: 'Brenna', age: 29, hair: 'blonde'},
                              {name: 'Bitsy', age: 26, hair: 'brunette'},
                              {name: 'Tove', age: 2, hair: 'calico', species: 'cat'}],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange (val){
        this.setState({
            userInput: val
        })
    }

    filterStuff(userInput){
        let userArray = this.state.unFilteredArray.filter(function(elem){
            return elem.hasOwnProperty(userInput)
        })
        this.setState ({
            filteredArray: userArray
            })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.filterStuff(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;