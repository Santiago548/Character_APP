// deleteCharacter
// import CharacterForm from './containers/CharacterForm';
// import Characters from './containers/Characters'
// import RandomCharacterButton from './containers/RandomCharacterButton';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import { getCharacters } from './actions/characters'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./containers/About"
import Search  from "./containers/Search"
import Home from "./containers/CharactersContainer"
import General from "./containers/GeneralCharacters"
import Scifi from "./containers/ScifiCharacters"
import Fantasy from "./containers/FantasyCharacters"
import Navigation from './components/Navigation'
import Footer from './components/Footer';

class App extends Component {

  componentDidMount(){
    this.props.getCharacters()
  }

  handleclick = event => {
    this.props.deleteCharacter(event.target.id)
  }

  render(){

    return (
      <Router>
        <Navigation /> 
        <header className='app-header'>
          <h1>Character APP</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/general" component={General} />
            <Route exact path="/scifi" component={Scifi} />
            <Route exact path="/fantasy" component={Fantasy} />
            <Route exact path="/search" component={Search} />
          </Switch>
          <Footer />
      </Router>
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
