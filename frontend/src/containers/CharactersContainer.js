
import { connect } from 'react-redux'
import React, { Component } from 'react'

import CharacterForm from './CharacterForm';
import Characters from './Characters'
import RandomCharacterButton from './RandomCharacterButton';
import RandomCharacterScifi from './RandomCharacterScifi';
import RandomCharacterFantasy from './RandomCharacterFantasy';

class CharactersContainer extends Component {
    render (){
        return (
            <div>
                <div className='container'>
                    <CharacterForm />
                    <br/>
                    <div>
                    <RandomCharacterButton />
                    <RandomCharacterScifi />
                    <RandomCharacterFantasy />
                    </div>
                <div>
                    {this.props.loading ? <h5>Loading Characters...</h5> : <Characters />}
                </div>
            </div>
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
  
  
  export default connect(mapStateToProps)(CharactersContainer);
  