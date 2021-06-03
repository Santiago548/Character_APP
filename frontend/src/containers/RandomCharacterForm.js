// class component to return state
import React, { Component } from 'react'
import { addCharacter } from '../actions/characters'
import { connect } from 'react-redux'
// import { RegionInput } from '../components/regionInput'

class RandomCharacterForm extends Component {
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
        const firstnameArray = [ "Amari","Angel","August","Avery","Blake","Charlie","Eden","Elliot","Elliott","Emerson","Finley","Hayden","Jordan","Karter","Parker","Payton","Phoenix","Quinn","Remington","Riley","River","Rowan","Ryan","Sawyer","Taylor"]
        const lastnameArray = []
        const genderArray = [ "Male", "Female", "Non-Binary"]
        const ageArray = range(1, 100)
        const regionArray = ["Albania","Argentina","Armenia","Australia","Austria","Azerbaijan","Bangladesh","Belgium","Bosnia and Herzegovina","Brazil","Bulgaria","Canada","China","Colombia","Costa Rica","Croatia","Czech Republic","Denmark","Egypt","England","Estonia","Finland","France","Georgia","Germany","Greecea","Hungary","India","Indonesia","Iran","Ireland","Israel","Italy","Japan","Korea","Kyrgyz Republic","Mexico","Morocco","Nepal","Netherlands","New Zealand","Nigeria","Norway","Pakistan","Poland","Portugal","Romania","Russia","Saudi Arabia","Slovakiaa","Slovenia","Spaina","Swedena","Switzerland","Tunisia","Turkey","Ukraine","United States","Vietnam"]
        const trait1Array = ["Honest","Brave","Compassionate","Leader","Courageous","Unselfish","Loyal","Hard-working","Independent","Selfish","Responsible","Considerate","Self-confident","Humble","Poor","Rich","Strong","Tall","Dark","Light","Handsome","Pretty","Ugly","Messy","Gentle","Wild","Joyful","Busy","Patriotic","Neat","Popular","Successful","Short","Prim","Proper","Dainty","Able","Fighter","Tireless","Plain","Expert","Imaginative","Conceited","Mischievous","Demanding","Thoughtful","Keen","Happy","Disagreeable","Simple","Fancy","Plain","Excited","Studious","Inventive","Creative","Thrilling","Intelligent","Proud","Fun-loving","Daring","Bright","Serious","Funny","Humorous","Sad","Lazy","Dreamer","Helpful","Simple-minded","Friendly","Adventurous","Timid","Shy","Pitiful","Cooperative","Lovable","Ambitious","Quiet","Curious","Reserved","Pleasing","Bossy","Witty","Energetic","Cheerful","Smart","Impulsive","Humorous","Sad","Lazy","Dreamer","Helpful"]
        const trait2Array = ["Honest","Brave","Compassionate","Leader","Courageous","Unselfish","Loyal","Hard-working","Independent","Selfish","Responsible","Considerate","Self-confident","Humble","Poor","Rich","Strong","Tall","Dark","Light","Handsome","Pretty","Ugly","Messy","Gentle","Wild","Joyful","Busy","Patriotic","Neat","Popular","Successful","Short","Prim","Proper","Dainty","Able","Fighter","Tireless","Plain","Expert","Imaginative","Conceited","Mischievous","Demanding","Thoughtful","Keen","Happy","Disagreeable","Simple","Fancy","Plain","Excited","Studious","Inventive","Creative","Thrilling","Intelligent","Proud","Fun-loving","Daring","Bright","Serious","Funny","Humorous","Sad","Lazy","Dreamer","Helpful","Simple-minded","Friendly","Adventurous","Timid","Shy","Pitiful","Cooperative","Lovable","Ambitious","Quiet","Curious","Reserved","Pleasing","Bossy","Witty","Energetic","Cheerful","Smart","Impulsive","Humorous","Sad","Lazy","Dreamer","Helpful"]
        const backgroundArray = []
        const storyhookArray = []
            
            
        const randomFirstname = firstnameArray[Math.floor(Math.random() * firstnameArray.length)]
        const randomLastname = lastnameArray[Math.floor(Math.random() * lastnameArray.length)] 
        const randomGender = genderArray[Math.floor(Math.random() * genderArray.length)] 
        const randomAge = ageArray[Math.floor(Math.random() * ageArray.length)] 
        const randomRegion = regionArray[Math.floor(Math.random() * regionArray.length)] 
        const randomTrait1 = trait1Array[Math.floor(Math.random() * trait1Array.length)]
        const randomTrait2 = trait2Array[Math.floor(Math.random() * trait2Array.length)]
        const randomBackground = backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
        const randomStoryhook = storyhookArray[Math.floor(Math.random() * storyhookArray.length)]
            
        const firstname = randomFirstname
        const lastname = randomLastname
        const gender = randomGender
        const age = randomAge
        const region = randomRegion 
        const trait1 = randomTrait1
        const trait2 = randomTrait2
        const background = randomBackground
        const storyhook = randomStoryhook
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="character-form">
                    <button type="submit">Random Character Generator</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addCharacter })(RandomCharacterForm)

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

