import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFantasyCharacters } from '../actions/characters'
import Characters from './Characters'

class FantasyCharacters extends Component {

  componentDidMount(){
        this.props.getFantasyCharacters()
      }
    
    render() {

        return (
        <div>
            <h1 className='character-title-filter'>Fantasy Characters List</h1>
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

export default connect(mapStateToProps, { getFantasyCharacters })(FantasyCharacters);