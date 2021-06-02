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
                    <input type="text" name = "firstname" value={this.state.firstname} onChange={this.handleChange} />
                    <br/>
                    <label>lastname: </label>
                    <input type="text" name ="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                    <br/>
                    <label>Gender: </label>
                    <select 
                        name="gender" 
                        value={this.state.gender} 
                        onChange={this.handleChange}>
                        <option></option>
                        <option name="gender" value="Male">Male</option>
                        <option name="gender" value="Female">Female</option>
                        <option name="gender" value="Non-Binary">Non-Binary</option>
                    </select>
                    <br/>
                    <label>Age: </label>
                    <input type="number" name = "age" value={this.state.age} onChange={this.handleChange}/>
                    <br/>
                    <label>Region: </label>
                    <select 
                        name="region" 
                        value={this.state.region} 
                        onChange={this.handleChange}>
                        <option></option>
                        <option name="region" value="Albania">Albania</option>
                        <option name="region" value="Argentina">Argentina</option>
                        <option name="region" value="Armenia">Armenia</option>
                        <option name="region" value="Australia">Australia</option>
                        <option name="region" value="Austria">Austria</option>
                        <option name="region" value="Azerbaijan">Azerbaijan"</option>
                        <option name="region" value="Bangladesh">Bangladesh</option>
                        <option name="region" value="Belgium">Belgium</option>
                        <option name="region" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option name="region" value="Brazil">Brazil</option>
                        <option name="region" value="Bulgaria">Bulgaria</option>
                        <option name="region" value="Canada">Canada</option>
                        <option name="region" value="China">China</option>
                        <option name="region" value="Colombia">Colombia</option>
                        <option name="region" value="Costa Rica">Costa Rica</option>
                        <option name="region" value="Croatia">Croatia</option>
                        <option name="region" value="Czech Republic">Czech Republic</option>
                        <option name="region" value="Denmark">Denmark</option>
                        <option name="region" value="Egypt">Egypt</option>
                        <option name="region" value="England">England</option>
                        <option name="region" value="Estonia">Estonia</option>
                        <option name="region" value="Finland">Finland</option>
                        <option name="region" value="France">France</option>
                        <option name="region" value="Georgia">Georgia</option>
                        <option name="region" value="Germany">Germany</option>
                        <option name="region" value="Greecea">Greece</option>
                        <option name="region" value="Hungary">Hungary</option>
                        <option name="region" value="India">India</option>
                        <option name="region" value="Indonesia">Indonesia</option>
                        <option name="region" value="Iran">Iran</option>
                        <option name="region" value="Ireland">Ireland</option>
                        <option name="region" value="Israel">Israel</option>
                        <option name="region" value="Italy">Italy</option>
                        <option name="region" value="Japan">Japan</option>
                        <option name="region" value="Korea">Korea</option>
                        <option name="region" value="Kyrgyz Republic">Kyrgyz Republic</option>
                        <option name="region" value="Mexico">Mexico</option>
                        <option name="region" value="Morocco">Morocco</option>
                        <option name="region" value="Nepal">Nepal</option>
                        <option name="region" value="Netherlands">Netherlands</option>
                        <option name="region" value="New Zealand">New Zealand</option>
                        <option name="region" value=">Nigeria">Nigeria</option>
                        <option name="region" value="Norway">Norway</option>
                        <option name="region" value="Pakistan">Pakistan</option>
                        <option name="region" value="Poland">Poland</option>
                        <option name="region" value="Portugal">Portugal</option>
                        <option name="region" value="Romania">Romania</option>
                        <option name="region" value="Russia">Russia</option>
                        <option name="region" value="Saudi Arabia">Saudi Arabia</option>
                        <option name="region" value="Slovakiaa">Slovakia</option>
                        <option name="region" value="Slovenia">Slovenia</option>
                        <option name="region" value="Spaina">Spain</option>
                        <option name="region" value="Swedena">Sweden</option>
                        <option name="region" value="Switzerland">Switzerland</option>
                        <option name="region" value="Tunisia">Tunisia</option>
                        <option name="region" value="Turkey">Turkey</option>
                        <option name="region" value="Ukraine">Ukraine</option>
                        <option name="region" value="United States">United States</option>
                        <option name="region" value="Vietnam">Vietnam</option>                       
                    </select>
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
     