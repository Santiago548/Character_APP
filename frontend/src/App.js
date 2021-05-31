import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import { getCharacters } from './actions/characters'

class App extends Component {

  componentDidMount(){
    this.props.getCharacters()
  }

  render(){
    const characters = this.props.characters.map((character, i) => <li key={i}>{character.firstname}<button id={character.id}>X</button></li>)
    return (
      <div className="App">
        <header >
          <h1>Character APP</h1>
        </header>
        <ul>
          {this.props.loading ? <h5>Loading Characters...</h5> : characters}
        </ul>
        <hr/>
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
