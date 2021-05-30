import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header >
          <h1>Character APP</h1>
        </header>
        <ul>
          {this.props.loading ? <h5>Loading Characters...</h5> : <h5>Not Loading...</h5>}
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


export default connect(mapStateToProps)(App);
