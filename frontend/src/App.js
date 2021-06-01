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
    const characters = this.props.characters.map((character, i) => <fieldset className="App-fieldset"><button id={character.id} onClick={this.handleclick}>x</button> <div key={i}> First Name: {character.firstname} <br /> Last Name: {character.lastname}</div></fieldset>)

    return (
      <div>
        <header className='app-title'>
          <h1>Character APP</h1>
          <hr/>
        </header>
        <h5> Create Character: </h5>
        <CharacterForm />
        <br/>
        <div>
          {this.props.loading ? <h5>Loading Characters...</h5> : characters}
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


export default connect(mapStateToProps, { getCharacters, deleteCharacter })(App);
