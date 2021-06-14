import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScifiCharacters } from '../actions/characters'
import ScifiBackground from '../components/ScifiBackground'

import CharactersFiltered from './CharactersFiltered'

class ScifiCharacters extends Component {

  componentDidMount() {
    this.props.getScifiCharacters()
    console.log('hi scifi characters')
  }

  render() {

    return (
      <>
        <hr className='hr-title' />
        <h1 className='character-title-filter'>SCI-FI CHARACTERS LIST</h1>
        <hr className='hr-title' />
        <div className='filter-container'>
          <ScifiBackground />
          <div className='item-a'>
            {this.props.loading ? <h5>Loading Characters...</h5> : <CharactersFiltered />}
          </div>
          <ScifiBackground />
        </div>
        <hr className='hr-title' />
      </>
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