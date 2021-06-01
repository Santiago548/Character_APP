// class component to return state
import React, { Component } from 'react'
import { addCharacter } from '../actions/characters'
import { connect } from 'react-redux'

class CharacterForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        gender: "",
        age: "",
        region: "",
        trait1: "",
        trait2: "",
        background: "",
        storyhook: "",
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const character = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            age: this.state.age,
            region: this.state.region,
            trait1: this.state.trait1,
            trait2: this.state.trait2,
            background: this.state.background,
            storyhook: this.state.storyhook
        }
            this.props.addCharacter(character)
            this.setState({
                firstname: "",
                lastname: "",
                gender: "",
                age: "",
                region: "",
                trait1: "",
                trait2: "",
                background: "",
                storyhook: "",
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="character-form">
                    <label>firstname:</label>
                    <input type="text"
                        name = "firstname" 
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        />
                    <br/>
                    <label>lastname: </label>
                    <input type="text" name ="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                    <br/>
                    <label>Gender: </label>
                    <input type="text" name ="gender" value={this.state.gender} onChange={this.handleChange}/>
                    <br/>
                    <label>Age: </label>
                    <input type="number" name = "age" value={this.state.age} onChange={this.handleChange}/>
                    <br/>
                    <label>Region: </label>
                    <input type="text" name = "region" value={this.state.region} onChange={this.handleChange}/>
                    <br/>
                    <label>Trait 1: </label>
                    <input type="text" name = "trait1" value={this.state.trait1} onChange={this.handleChange}/>
                    <br/>
                    <label>Trait 2: </label>
                    <input type="text" name = "trait2" value={this.state.trait2} onChange={this.handleChange}/>
                    <br/>
                    <label>Background: </label>
                    <input type="text" name = "background" value={this.state.background} onChange={this.handleChange}/>
                    <br/>
                    <label>Story Hook: </label>
                    <input type="text" name = "storyhook" value={this.state.storyhook} onChange={this.handleChange}/>
                    <br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addCharacter })(CharacterForm)