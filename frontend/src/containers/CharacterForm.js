// class component to return state
import React, { Component } from 'react' 

export default class CharacterForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        sex: "",
        age: "",
        race: "",
        alignment: "",
        trait1: "",
        trait2: "",
        background: "",
        storyhook: "",
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: ""
    }

    render() {
        return (
            <div>
                <form>
                    <label>firstname:</label>
                    <input type="text" value={this.state.firstname}/>
                    <br/>
                    <label>lastname:</label>
                    <input type="text" value={this.state.lastname}/>
                    <br/>
                    <label>Sex:</label>
                    <input type="text" value={this.state.sex}/>
                    <br/>
                    <label>Age:</label>
                    <input type="text" value={this.state.age}/>
                    <br/>
                    <label>Race:</label>
                    <input type="text" value={this.state.race}/>
                    <br/>
                    <label>Alignment:</label>
                    <input type="text" value={this.state.alignment}/>
                    <br/>
                    <label>Trait 1:</label>
                    <input type="text" value={this.state.trait1}/>
                    <br/>
                    <label>Trait 2:</label>
                    <input type="text" value={this.state.trait2}/>
                    <br/>
                    <label>Background:</label>
                    <input type="text" value={this.state.background}/>
                    <br/>
                    <label>Story Hook:</label>
                    <input type="text" value={this.state.storyhook}/>
                    <br/>
                    <label>Strength:</label>
                    <input type="text" value={this.state.strength}/>
                    <br/>
                    <label>Dexterity:</label>
                    <input type="text" value={this.state.dexterity}/>
                    <br/>
                    <label>Constitution:</label>
                    <input type="text" value={this.state.constitution}/>
                    <br/>
                    <label>intelligence:</label>
                    <input type="text" value={this.state.intelligence}/>
                    <br/>
                    <label>Wisdom:</label>
                    <input type="text" value={this.state.wisdom}/>
                    <br/>
                    <label>Charisma:</label>
                    <input type="text" value={this.state.charisma}/>
                </form>
            </div>
        )
    }
}
