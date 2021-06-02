import React from 'react';

const CharacterCard = ({ character, deleteCharacter }) => 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <fieldset className="card-fieldset">
          <button 
            type="character-button" 
            onClick={() => deleteCharacter(character.id)} 
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className='character-info'> 
          
          <b>Character Information:</b>
          <hr/>
            First Name: {character.firstname}<br />
            Last Name: {character.lastname}<br />
            Gender: {character.gender}<br />
            Age: {character.age}<br />
            Region: {character.region}<br />
            <hr/>
            <b>Personality Traits:</b>
            <hr/>
            Trait 1: {character.trait1}<br />
            Trait 2: {character.trait2}<br />
            <hr /> 
            <b>Story Elements:</b>
            <hr/>
            Background: {character.background}<br />
            Story Hook: {character.storyhook}<br />
            </div>
        </fieldset>
      </div>
      <div className="float-right"> 
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
        </div>
       
      </div>
    </div>
  </div>;

export default CharacterCard;