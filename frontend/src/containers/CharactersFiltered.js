import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../components/CharacterCard';
import { deleteCharacter } from '../actions/characters';

class CharactersFiltered extends Component {

  render() {
    const { characters, deleteCharacter } = this.props;
    return (
      <div>
        <hr className='hr-title' />
        <div >
          {characters.map(character => <CharacterCard className='card-container-filter' key={character.id} deleteCharacter={deleteCharacter} character={character} setting={character.setting} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    characters: state.characterReducer.characters,
    loading: state.characterReducer.loading
  })
}

export default connect(mapStateToProps, { deleteCharacter })(CharactersFiltered);