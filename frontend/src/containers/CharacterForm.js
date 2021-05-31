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
                    <label for='firstname'>firstname:</label>
                    <input type="text" id='firstname' value={this.state.firstname}/>
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
                    <label for="strength">Strength:</label>
                    <select id="strength" name="strength" value={this.state.strength}>
                        <option value='1'>+ 1</option>
                        <option value="2">+ 2</option>
                        <option value="3">+ 3</option>
                        <option value="4">+ 4</option>
                        <option value="5">+ 5</option>
                        <option value="6">+ 6</option>
                    </select>
                    <br/>
                    <label for="dexterity">Dexterity:</label>
                    <select id="dexterity" name="dexterity" value={this.state.dexterity}>
                        <option value='1'>+ 1</option>
                        <option value="2">+ 2</option>
                        <option value="3">+ 3</option>
                        <option value="4">+ 4</option>
                        <option value="5">+ 5</option>
                        <option value="6">+ 6</option>
                    </select>
                    <br/>
                    <label for="constitution">Constitution:</label>
                    <select id="constitution" name="constitution" value={this.state.constitution}>
                        <option value='1'>+ 1</option>
                        <option value="2">+ 2</option>
                        <option value="3">+ 3</option>
                        <option value="4">+ 4</option>
                        <option value="5">+ 5</option>
                        <option value="6">+ 6</option>
                    </select>
                    <br/>
                    <label for="intelligence">Intelligence:</label>
                    <select id="intelligence" name="intelligence" value={this.state.intelligence}>
                        <option value='1'>+ 1</option>
                        <option value="2">+ 2</option>
                        <option value="3">+ 3</option>
                        <option value="4">+ 4</option>
                        <option value="5">+ 5</option>
                        <option value="6">+ 6</option>
                    </select>
                    <br/>
                    <label for="wisdom">Wisdom:</label>
                    <select id="wisdom" name="wisdom" value={this.state.wisdom}>
                        <option value='1'>+ 1</option>
                        <option value="2">+ 2</option>
                        <option value="3">+ 3</option>
                        <option value="4">+ 4</option>
                        <option value="5">+ 5</option>
                        <option value="6">+ 6</option>
                    </select>
                    <br/>
                    <label for="charisma">Charisma:</label>
                    <select id="charisma" name="charisma" value={this.state.charisma}>
                        <option value='1'>+ 1</option>
                        <option value="2">+ 2</option>
                        <option value="3">+ 3</option>
                        <option value="4">+ 4</option>
                        <option value="5">+ 5</option>
                        <option value="6">+ 6</option>
                    </select>
                </form>
            </div>
        )
    }
}
