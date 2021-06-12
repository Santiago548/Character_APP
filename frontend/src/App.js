import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import { getCharacters } from './actions/characters'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./components/About"
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
            <Route exact path="/characters/general" component={General} />
            <Route exact path="/characters/scifi" component={Scifi} />
            <Route exact path="/characters/fantasy" component={Fantasy} />
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
