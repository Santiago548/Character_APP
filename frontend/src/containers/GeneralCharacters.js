import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGeneralCharacters } from '../actions/characters'
import CharactersFiltered from './CharactersFiltered'
import GeneralBackground from '../components/GeneralBackground'

class GeneralCharacters extends Component {

  componentDidMount() {
    this.props.getGeneralCharacters()
    console.log('hi from General characters list')
  }

  render() {

    return (
      <div>
        <hr className='hr-title' />
        <h1 className='character-title-filter'>GENERAL CHARACTERS LIST</h1>
        
        <hr className='hr-title' />
        <hr className='hr-title' />
        <div className='filter-container'>
          <GeneralBackground />
          <div className='item-a'>
            {this.props.loading ? <h5>Loading Characters...</h5> : <CharactersFiltered />}
          </div>
          <GeneralBackground />
        </div>
        <hr className='hr-title' />
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

export default connect(mapStateToProps, { getGeneralCharacters })(GeneralCharacters);
