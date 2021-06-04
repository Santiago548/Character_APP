import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterCard from '../components/CharacterCard';
import { deleteCharacter } from '../actions/characters';

class Characters extends Component {

  render() {
    // const characters = this.props.characters.map((character, i) => <fieldset className="App-fieldset"><button className='character-button' id={character.id} onClick={this.handleclick}>x</button> <div className='character-info' key={i}> First Name: {character.firstname} <br /> Last Name: {character.lastname}</div></fieldset>)
    const { characters, deleteCharacter } = this.props;
    return (
      <div>
        <hr />
        <div>
          <h2 className='app-title'>CHARACTERS</h2>
        </div>
        <hr />
        <div>
          <div>
            <div>
              {characters.map(character => <CharacterCard key={character.id} deleteCharacter={deleteCharacter} character={character} />)}
            </div>
          </div>
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

export default connect(mapStateToProps, { deleteCharacter })(Characters);