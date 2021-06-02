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
            <fieldset className='character-info'>
              <legend className='card-legend'><b>CHARACTER INFORMATION:</b></legend>
                <b>Name</b> {character.firstname} {character.lastname}< br/> 
                <b>Gender:</b> {character.gender}<br />
                <b>Age:</b> {character.age}<br />
                <b>Region:</b> {character.region}<br />
            </fieldset>
            <fieldset className='personality-traits'>
              <legend className='card-legend'><b>PERSONALITY TRAITS:</b></legend>
                <b>Trait 1:</b> {character.trait1}<br />
                <b>Trait 2:</b> {character.trait2}<br />
            </fieldset>
            <fieldset className='story-elements'>
              <legend className='card-legend'><b>STORY ELEMENTS:</b></legend>
                <b>Background:</b> {character.background}<br />
                <b>Story Hook:</b> {character.storyhook}<br />
            </fieldset>
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