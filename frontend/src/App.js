import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import { getCharacters } from './actions/characters'
// deleteCharacter
import CharacterForm from './containers/CharacterForm';
import Characters from './containers/Characters'
import RandomCharacterButton from './containers/RandomCharacterButton';

class App extends Component {

  componentDidMount(){
    this.props.getCharacters()
  }

  handleclick = event => {
    this.props.deleteCharacter(event.target.id)
  }

  render(){
    // const characters = this.props.characters.map((character, i) => <fieldset className="App-fieldset"><button className='character-button' id={character.id} onClick={this.handleclick}>x</button> <div className='character-info' key={i}> First Name: {character.firstname} <br /> Last Name: {character.lastname}</div></fieldset>)

    return (
      <div>
        <header className='app-header'>
          <h1>Character APP</h1>
          <hr/>
        </header>
        <h5> Create Character: </h5>
        <CharacterForm />
        <RandomCharacterButton />
        <br/>
        <div>
          {this.props.loading ? <h5>Loading Characters...</h5> : <Characters />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characterReducer.characters,
    loading: state.characterReducer.loading
  }
}


export default connect(mapStateToProps, { getCharacters })(App);
// , deleteCharacter
