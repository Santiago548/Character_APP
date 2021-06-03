// class component to return state
import React, { Component } from 'react'
import { addCharacter } from '../actions/characters'
import { connect } from 'react-redux'
// import { RegionInput } from '../components/regionInput'

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
                        <option name="region" value="Spain">Spain</option>
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
                    <select 
                        name="trait1" 
                        value={this.state.trait1} 
                        onChange={this.handleChange}>
                        <option></option>
                        <option name="trait1" value="Honest">Honest</option> 
                        <option name="trait1" value="Brave">Brave</option> 
                        <option name="trait1" value="Compassionate">Compassionate</option> 
                        <option name="trait1" value="Leader">Leader</option> 
                        <option name="trait1" value="Courageous">Courageous</option> 
                        <option name="trait1" value="Unselfish">Unselfish</option> 
                        <option name="trait1" value="Loyal">Loyal</option> 
                        <option name="trait1" value="Hard-working">Hard-working</option> 
                        <option name="trait1" value="Independent">Independent</option> 
                        <option name="trait1" value="Selfish">Selfish</option> 
                        <option name="trait1" value="Responsible">Responsible</option> 
                        <option name="trait1" value="Considerate">Considerate</option> 
                        <option name="trait1" value="Self-confident">Self-confident</option> 
                        <option name="trait1" value="Humble">Humble</option> 
                        <option name="trait1" value="Poor">Poor</option> 
                        <option name="trait1" value="Rich">Rich</option> 
                        <option name="trait1" value="Strong">Strong</option> 
                        <option name="trait1" value="Tall">Tall</option> 
                        <option name="trait1" value="Dark">Dark</option> 
                        <option name="trait1" value="Light">Light</option> 
                        <option name="trait1" value="Handsome">Handsome</option> 
                        <option name="trait1" value="Pretty">Pretty</option> 
                        <option name="trait1" value="Ugly">Ugly</option> 
                        <option name="trait1" value="Messy">Messy</option> 
                        <option name="trait1" value="Gentle">Gentle</option> 
                        <option name="trait1" value="Wild">Wild</option> 
                        <option name="trait1" value="Joyful">Joyful</option> 
                        <option name="trait1" value="Busy">Busy</option> 
                        <option name="trait1" value="Patriotic">Patriotic</option> 
                        <option name="trait1" value="Neat">Neat</option> 
                        <option name="trait1" value="Popular">Popular</option> 
                        <option name="trait1" value="Successful">Successful</option> 
                        <option name="trait1" value="Short">Short</option> 
                        <option name="trait1" value="Prim">Prim</option> 
                        <option name="trait1" value="Proper">Proper</option> 
                        <option name="trait1" value="Dainty">Dainty</option> 
                        <option name="trait1" value="Able">Able</option> 
                        <option name="trait1" value="Fighter">Fighter</option> 
                        <option name="trait1" value="Tireless">Tireless</option> 
                        <option name="trait1" value="Plain">Plain</option> 
                        <option name="trait1" value="Expert">Expert</option> 
                        <option name="trait1" value="Imaginative">Imaginative</option> 
                        <option name="trait1" value="Conceited">Conceited</option> 
                        <option name="trait1" value="Mischievous">Mischievous</option> 
                        <option name="trait1" value="Demanding">Demanding</option> 
                        <option name="trait1" value="Thoughtful">Thoughtful</option> 
                        <option name="trait1" value="Keen">Keen</option> 
                        <option name="trait1" value="Happy">Happy</option> 
                        <option name="trait1" value="Disagreeable">Disagreeable</option> 
                        <option name="trait1" value="Simple">Simple</option> 
                        <option name="trait1" value="Fancy">Fancy</option> 
                        <option name="trait1" value="Plain">Plain</option> 
                        <option name="trait1" value="Excited">Excited</option> 
                        <option name="trait1" value="Studious">Studious</option> 
                        <option name="trait1" value="Inventive">Inventive</option> 
                        <option name="trait1" value="Creative">Creative</option> 
                        <option name="trait1" value="Thrilling">Thrilling</option> 
                        <option name="trait1" value="Intelligent">Intelligent</option> 
                        <option name="trait1" value="Proud">Proud</option> 
                        <option name="trait1" value="Fun-loving">Fun-loving</option> 
                        <option name="trait1" value="Daring">Daring</option> 
                        <option name="trait1" value="Bright">Bright</option> 
                        <option name="trait1" value="Serious">Serious</option> 
                        <option name="trait1" value="Funny">Funny</option> 
                        <option name="trait1" value="Humorous">Humorous</option> 
                        <option name="trait1" value="Sad">Sad</option> 
                        <option name="trait1" value="Lazy">Lazy</option> 
                        <option name="trait1" value="Dreamer">Dreamer</option> 
                        <option name="trait1" value="Helpful">Helpful</option> 
                        <option name="trait1" value="Simple-minded">Simple-minded</option> 
                        <option name="trait1" value="Friendly">Friendly</option> 
                        <option name="trait1" value="Adventurous">Adventurous</option> 
                        <option name="trait1" value="Timid">Timid</option> 
                        <option name="trait1" value="Shy">Shy</option> 
                        <option name="trait1" value="Pitiful">Pitiful</option> 
                        <option name="trait1" value="Cooperative">Cooperative</option> 
                        <option name="trait1" value="Lovable">Lovable</option> 
                        <option name="trait1" value="Ambitious">Ambitious</option> 
                        <option name="trait1" value="Quiet">Quiet</option> 
                        <option name="trait1" value="Curious">Curious</option> 
                        <option name="trait1" value="Reserved">Reserved</option> 
                        <option name="trait1" value="Pleasing">Pleasing</option> 
                        <option name="trait1" value="Bossy">Bossy</option> 
                        <option name="trait1" value="Witty">Witty</option> 
                        <option name="trait1" value="Energetic">Energetic</option> 
                        <option name="trait1" value="Cheerful">Cheerful</option> 
                        <option name="trait1" value="Smart">Smart</option> 
                        <option name="trait1" value="Impulsive">Impulsive</option> 
                        <option name="trait1" value="Humorous">Humorous</option> 
                        <option name="trait1" value="Sad">Sad</option> 
                        <option name="trait1" value="Lazy">Lazy</option> 
                        <option name="trait1" value="Dreamer">Dreamer</option> 
                        <option name="trait1" value="Helpful">Helpful</option> 
                    </select>
                    <br/>
                    <label>Trait 2: </label>
                    <select 
                        name="trait2" 
                        value={this.state.trait2} 
                        onChange={this.handleChange}>
                        <option></option>
                        <option name="trait2" value="Honest">Honest</option> 
                        <option name="trait2" value="Brave">Brave</option> 
                        <option name="trait2" value="Compassionate">Compassionate</option> 
                        <option name="trait2" value="Leader">Leader</option> 
                        <option name="trait2" value="Courageous">Courageous</option> 
                        <option name="trait2" value="Unselfish">Unselfish</option> 
                        <option name="trait2" value="Loyal">Loyal</option> 
                        <option name="trait2" value="Hard-working">Hard-working</option> 
                        <option name="trait2" value="Independent">Independent</option> 
                        <option name="trait2" value="Selfish">Selfish</option> 
                        <option name="trait2" value="Responsible">Responsible</option> 
                        <option name="trait2" value="Considerate">Considerate</option> 
                        <option name="trait2" value="Self-confident">Self-confident</option> 
                        <option name="trait2" value="Humble">Humble</option> 
                        <option name="trait2" value="Poor">Poor</option> 
                        <option name="trait2" value="Rich">Rich</option> 
                        <option name="trait2" value="Strong">Strong</option> 
                        <option name="trait2" value="Tall">Tall</option> 
                        <option name="trait2" value="Dark">Dark</option> 
                        <option name="trait2" value="Light">Light</option> 
                        <option name="trait2" value="Handsome">Handsome</option> 
                        <option name="trait2" value="Pretty">Pretty</option> 
                        <option name="trait2" value="Ugly">Ugly</option> 
                        <option name="trait2" value="Messy">Messy</option> 
                        <option name="trait2" value="Gentle">Gentle</option> 
                        <option name="trait2" value="Wild">Wild</option> 
                        <option name="trait2" value="Joyful">Joyful</option> 
                        <option name="trait2" value="Busy">Busy</option> 
                        <option name="trait2" value="Patriotic">Patriotic</option> 
                        <option name="trait2" value="Neat">Neat</option> 
                        <option name="trait2" value="Popular">Popular</option> 
                        <option name="trait2" value="Successful">Successful</option> 
                        <option name="trait2" value="Short">Short</option> 
                        <option name="trait2" value="Prim">Prim</option> 
                        <option name="trait2" value="Proper">Proper</option> 
                        <option name="trait2" value="Dainty">Dainty</option> 
                        <option name="trait2" value="Able">Able</option> 
                        <option name="trait2" value="Fighter">Fighter</option> 
                        <option name="trait2" value="Tireless">Tireless</option> 
                        <option name="trait2" value="Plain">Plain</option> 
                        <option name="trait2" value="Expert">Expert</option> 
                        <option name="trait2" value="Imaginative">Imaginative</option> 
                        <option name="trait2" value="Conceited">Conceited</option> 
                        <option name="trait2" value="Mischievous">Mischievous</option> 
                        <option name="trait2" value="Demanding">Demanding</option> 
                        <option name="trait2" value="Thoughtful">Thoughtful</option> 
                        <option name="trait2" value="Keen">Keen</option> 
                        <option name="trait2" value="Happy">Happy</option> 
                        <option name="trait2" value="Disagreeable">Disagreeable</option> 
                        <option name="trait2" value="Simple">Simple</option> 
                        <option name="trait2" value="Fancy">Fancy</option> 
                        <option name="trait2" value="Plain">Plain</option> 
                        <option name="trait2" value="Excited">Excited</option> 
                        <option name="trait2" value="Studious">Studious</option> 
                        <option name="trait2" value="Inventive">Inventive</option> 
                        <option name="trait2" value="Creative">Creative</option> 
                        <option name="trait2" value="Thrilling">Thrilling</option> 
                        <option name="trait2" value="Intelligent">Intelligent</option> 
                        <option name="trait2" value="Proud">Proud</option> 
                        <option name="trait2" value="Fun-loving">Fun-loving</option> 
                        <option name="trait2" value="Daring">Daring</option> 
                        <option name="trait2" value="Bright">Bright</option> 
                        <option name="trait2" value="Serious">Serious</option> 
                        <option name="trait2" value="Funny">Funny</option> 
                        <option name="trait2" value="Humorous">Humorous</option> 
                        <option name="trait2" value="Sad">Sad</option> 
                        <option name="trait2" value="Lazy">Lazy</option> 
                        <option name="trait2" value="Dreamer">Dreamer</option> 
                        <option name="trait2" value="Helpful">Helpful</option> 
                        <option name="trait2" value="Simple-minded">Simple-minded</option> 
                        <option name="trait2" value="Friendly">Friendly</option> 
                        <option name="trait2" value="Adventurous">Adventurous</option> 
                        <option name="trait2" value="Timid">Timid</option> 
                        <option name="trait2" value="Shy">Shy</option> 
                        <option name="trait2" value="Pitiful">Pitiful</option> 
                        <option name="trait2" value="Cooperative">Cooperative</option> 
                        <option name="trait2" value="Lovable">Lovable</option> 
                        <option name="trait2" value="Ambitious">Ambitious</option> 
                        <option name="trait2" value="Quiet">Quiet</option> 
                        <option name="trait2" value="Curious">Curious</option> 
                        <option name="trait2" value="Reserved">Reserved</option> 
                        <option name="trait2" value="Pleasing">Pleasing</option> 
                        <option name="trait2" value="Bossy">Bossy</option> 
                        <option name="trait2" value="Witty">Witty</option> 
                        <option name="trait2" value="Energetic">Energetic</option> 
                        <option name="trait2" value="Cheerful">Cheerful</option> 
                        <option name="trait2" value="Smart">Smart</option> 
                        <option name="trait2" value="Impulsive">Impulsive</option> 
                        <option name="trait2" value="Humorous">Humorous</option> 
                        <option name="trait2" value="Sad">Sad</option> 
                        <option name="trait2" value="Lazy">Lazy</option> 
                        <option name="trait2" value="Dreamer">Dreamer</option> 
                        <option name="trait2" value="Helpful">Helpful</option> 
                    </select>
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
     

