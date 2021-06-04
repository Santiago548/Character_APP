// class component to return state
import React, { Component } from 'react'
import { addCharacter } from '../actions/characters'
import { connect } from 'react-redux'

class RandomCharacterButton extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
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
}

    // handleChange = event => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleClick = event => {
        event.preventDefault()
        function range(start, end) {
            return Array(end - start + 1).fill().map((_, idx) => start + idx)
        }        
        const firstnameArray = [ "Amari","Angel","August","Avery","Blake","Charlie","Eden","Elliot","Elliott","Emerson","Finley","Hayden","Jordan","Karter","Parker","Payton","Phoenix","Quinn","Remington","Riley","River","Rowan","Ryan","Sawyer","Taylor"]
        const lastnameArray = [ "Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores","Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts"]
        const genderArray = [ "Male", "Female", "Non-Binary"]
        const ageArray = range(1, 65)
        const regionArray = ["Albania","Argentina","Armenia","Australia","Austria","Azerbaijan","Bangladesh","Belgium","Bosnia and Herzegovina","Brazil","Bulgaria","Canada","China","Colombia","Costa Rica","Croatia","Czech Republic","Denmark","Egypt","England","Estonia","Finland","France","Georgia","Germany","Greecea","Hungary","India","Indonesia","Iran","Ireland","Israel","Italy","Japan","Korea","Kyrgyz Republic","Mexico","Morocco","Nepal","Netherlands","New Zealand","Nigeria","Norway","Pakistan","Poland","Portugal","Romania","Russia","Saudi Arabia","Slovakiaa","Slovenia","Spaina","Swedena","Switzerland","Tunisia","Turkey","Ukraine","United States","Vietnam"]
        const trait1Array = ["Honest","Brave","Compassionate","Leader","Courageous","Unselfish","Loyal","Hard-working","Independent","Selfish","Responsible","Considerate","Self-confident","Humble","Poor","Rich","Strong","Tall","Dark","Light","Handsome","Pretty","Ugly","Messy","Gentle","Wild","Joyful","Busy","Patriotic","Neat","Popular","Successful","Short","Prim","Proper","Dainty","Able","Fighter","Tireless","Plain","Expert","Imaginative","Conceited","Mischievous","Demanding","Thoughtful","Keen","Happy","Disagreeable","Simple","Fancy","Plain","Excited","Studious","Inventive","Creative","Thrilling","Intelligent","Proud","Fun-loving","Daring","Bright","Serious","Funny","Humorous","Sad","Lazy","Dreamer","Helpful","Simple-minded","Friendly","Adventurous","Timid","Shy","Pitiful","Cooperative","Lovable","Ambitious","Quiet","Curious","Reserved","Pleasing","Bossy","Witty","Energetic","Cheerful","Smart","Impulsive","Humorous","Sad","Lazy","Dreamer","Helpful"]
        const trait2Array = ["Honest","Brave","Compassionate","Leader","Courageous","Unselfish","Loyal","Hard-working","Independent","Selfish","Responsible","Considerate","Self-confident","Humble","Poor","Rich","Strong","Tall","Dark","Light","Handsome","Pretty","Ugly","Messy","Gentle","Wild","Joyful","Busy","Patriotic","Neat","Popular","Successful","Short","Prim","Proper","Dainty","Able","Fighter","Tireless","Plain","Expert","Imaginative","Conceited","Mischievous","Demanding","Thoughtful","Keen","Happy","Disagreeable","Simple","Fancy","Plain","Excited","Studious","Inventive","Creative","Thrilling","Intelligent","Proud","Fun-loving","Daring","Bright","Serious","Funny","Humorous","Sad","Lazy","Dreamer","Helpful","Simple-minded","Friendly","Adventurous","Timid","Shy","Pitiful","Cooperative","Lovable","Ambitious","Quiet","Curious","Reserved","Pleasing","Bossy","Witty","Energetic","Cheerful","Smart","Impulsive","Humorous","Sad","Lazy","Dreamer","Helpful"]
        const backgroundArray = []
        const storyhookArray = [ "A character believes they have committed a crime someone else knows they are innocent of.", "A hairstylist overhears something they shouldn't while cutting hair.", "A character wakes up knowing a new language but forgets their mother tongue.", "A sailor banished on a year-long journey to atone for his crimes must reconcile with what he's done.", "A character buys a new coat, only to find a mysterious message sewn into the lining of it.", "A character falls asleep on an abandoned ship and awakes on a new planet.", "A family dynasty threatens to fall apart when an illegitimate child steps into the picture with a list of demands.", "A character is sold the 'Best Year of Their Life' by an illustrious company, with the caveat that they must die afterward.", "A museum security guard witnesses someone stealing a painting, but lies about it.", "Two villages compete to have the best technology in the country.", "An elderly woman falls madly in love with a young character and seduces them.", "An adopted child starts to receive tens of letters from people who claim they're her parents.", "A character's twin sibling dies, and the twin attempts to fill their shoes.", "A run-down city attempts to revitalize the area by introducing a monarchy.", "An estranged family gets together after ten years after their grandparents go missing.", "A mermaid lures a character into a life undersea.", "A middle-class family works to start the first intergalactic newspaper company using all the money in their savings.", "In the midst of a war, the women of a local town abandon their neighborhood only a week before their husbands and sons return.", "A lawyer gives up their practice to move across the country with someone half their age.", "A cheater starts a journal to keep track of their deceit.", "A character decides to find and collect all of the dresses her grandmother designed.", "A parent steals their child’s invention idea and makes a lifelong profit they put into retirement.", "A character returns to their hometown and realizes they can never leave again.", "A computer threatens the privacy of a major city.", "A murder causes a town to turn against one another.", "A dictator forces an illustrious fashion designer to design the new military uniforms for the war.", "A hermit's caretaker passes away, forcing them to make trips outside to interview a new candidate for the job.", "A story about an ancient society where gender roles are reversed.", "A grandchild attempts to connect with her long-lost grandmother by cooking through the family cookbook.", "Two separate families become one after a marriage unites them.", "A character sets out to sail the river from one end of their country to other.", "A character becomes the mayor of a new town that doesn't accept them.", "A character discovers they have the ability to visit the past and future, but at the risk that they'll lose something valuable.", "A Queen must prepare their child to be a proper ruler in his late father’s stead.", "During the railroad boom, a group of homesteaders tries to keep up with a changing society.", "A character moves to a rural town to get away from their troubles but trouble keeps finding them..", "An English billionaire decides to host a series of contests in order to choose a worthy successor.", "Onboard a broken-down freighter in Alaska, a crew must survive a brutal situation.", "In a series of weekly sessions, a character recalls their experience of war to overcome his PTSD.", "In the midst of a plague-ridden Venice, an inspector begins a series of unethical experiments to find a cure.", "Humans discover a new sentient plant life deep in the rainforests of Brazil.", "The tales of a family that moved to a country before a war breaks out.", "A character that struggles to reconnect with their estranged family.", "Three strangers win a getaway vacation together", "A diver uncovers government secrets buried at the bottom of the ocean.", "A character confronts their illogical but deeply real fear of being sucked down by the bathtub drain.", "A family takes a cross-country road trip in the aftermath of a nuclear war.", "An orphan attempts to make a home of their own.", "A woman is called on a mission to save her lover.", "A scientist develops and sells a medicine that saves lives but isn't legal.", "A story about an immigrant and their move to another country.", "A character attempts to establish a church devoted to the Greek gods and finds out they are one of their illegitimate children.", "A family struggles to endure a heatwave and drought in the midst of a long summer.", "A parent manipulates their children into committing felonies on their behalf.", "A character decides to fail all their classes to make a statement.", "A town prepares for the election of its first-ever Mayer. The Character is one of the people running", "A character moves to a new town and pretends to be someone they used to know.", "The character falls in love with someone they shouldn't.", "A character finds a journal with half of the pages filled and works to respond to their story.", "A woman, posing as a priest, is elected to be the new Pope.", "The CEO of an insurance company deals with the necessary evils of his own trade.", "A robot becomes self-aware in the midst of a war it was purchased to fight.", "A pawnshop owner faces the internal battle of selling items they know are valuable to others.", "A police officer confronts a mistake they made and hid while on the job.", "A hidden society figures out how to reveal itself to the rest of the world.", "A character attempts to uncover the lore of their village.", "A character travels back in time, where they realize they are more important than in the modern-day.", "A daughter sets out to break out her family curse in an unconventional way.", "A feudal era story in which they try to connect with their long-distance lover.", "A character attempts to experience every type of love possible.", "A scientist uncovers a secret portal that leads to a life-changing future.", "A character is told a deep family secret that they must protect until their death, no matter how much it torments them.", "A fantasy character kills someone they loathe and must cover up the evidence.", "A character develops the power to alter their personality, but cannot control it.", "A character attempts to explain their experiences traveling through a desert.", "A character looks to escape a life-threatening situation in a foreign country.", "A Ruler deals with a rising leader threatening her power.", "A retired couple navigates life in a new country abroad without family.", "A character confronts their perverted nature and struggles to change.", "A character lives on the border, across from a society and culture much different from their own.", "A war hero returns home and attempts to make connections with old friends." ]
        
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
        
        const characterToAdd = {
            firstname: this.state.firstname + firstname,
            lastname: this.state.lastname + lastname,
            gender: this.state.gender + gender,
            age: this.state.age + age,
            region: this.state.region + region,
            trait1: this.state.trait1 + trait1,
            trait2: this.state.trait2 + trait2,
            background: this.state.background + background,
            storyhook: this.state.storyhook + storyhook
        }
            this.props.addCharacter(characterToAdd)
        }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick} className="random-form">
                    <button type="submit">Random Character Generator</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addCharacter })(RandomCharacterButton)


