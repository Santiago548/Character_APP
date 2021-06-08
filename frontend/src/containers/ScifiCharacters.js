import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScifiCharacters } from '../actions/characters'
import Characters from './Characters'

class ScifiCharacters extends Component {

    componentDidMount(){
        this.props.getScifiCharacters()
      }
    
    render() {

        return (
            <div>
            <h1 className='scifi-characters-title'>Sci-fi Characters List</h1>
            {this.props.loading ? <h5>Loading Characters...</h5> : <Characters />}
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
      characters: state.characterReducer.characters,
      loading: state.characterReducer.loading
    }
  }

export default connect(mapStateToProps, { getScifiCharacters })(ScifiCharacters);