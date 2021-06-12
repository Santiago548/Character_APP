import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFantasyCharacters } from '../actions/characters'
import FantasyBackground from '../components/FantasyBackground'
import CharactersFiltered from './CharactersFiltered'

class FantasyCharacters extends Component {

  componentDidMount(){
        this.props.getFantasyCharacters()
        console.log('hi fnatasy characters')
      }
    
    render() {

        return (
        <div>
            <h1 className='character-title-filter'>FANTASY CHARACTERS LIST</h1>
            <div className='filter-container'>
              <FantasyBackground />
                <div className='item-a'>
                  {this.props.loading ? <h5>Loading Characters...</h5> : <CharactersFiltered />}
                </div>
                <FantasyBackground />
            </div>
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