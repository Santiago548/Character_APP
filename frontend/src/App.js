import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import { getCharacters, deleteCharacter } from './actions/characters'
import CharacterForm from './containers/CharacterForm';

class App extends Component {

  componentDidMount(){
    this.props.getCharacters()
  }

  handleclick = event => {
    this.props.deleteCharacter(event.target.id)
  }

  render(){
    const characters = this.props.characters.map((character, i) => <li key={i}>{character.firstname} {character.lastname}<button id={character.id} onClick={this.handleclick}>X</button></li>)

    return (
      <div className="App">
        <header >
          <h1>Character APP</h1>
        </header>
        <ul>
          {this.props.loading ? <h5>Loading Characters...</h5> : characters}
        </ul>
        <hr/>
        <h5> Create Character: </h5>
        <CharacterForm />
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


export default connect(mapStateToProps, { getCharacters, deleteCharacter })(App);
