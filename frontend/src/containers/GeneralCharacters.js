import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGeneralCharacters } from '../actions/characters'
import Characters from './Characters'

class GeneralCharacters extends Component {

  componentDidMount(){
    this.props.getGeneralCharacters()
    console.log('hi from General characters list')
  }

    render() {

        return (
            <div>
            <h1 className='character-title-filter'>General Characters List</h1>
            {this.props.loading ? <h5>Loading Characters...</h5> : <Characters />}
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

export default connect(mapStateToProps, { getGeneralCharacters })(GeneralCharacters);