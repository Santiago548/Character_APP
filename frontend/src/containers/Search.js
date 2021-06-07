import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../actions/characters'
import Characters from './Characters'

class Search extends Component {

    componentDidMount(){
        this.props.getCharacters()
      }
    
    render() {

        return (
            <div>
            <h1 className='search-title'>Search</h1>
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

export default connect(mapStateToProps, { getCharacters })(Search);
