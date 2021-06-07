// class component to return state
import React, { Component } from 'react'
import { addCharacter } from '../actions/characters'
import { connect } from 'react-redux'

class RandomCharacterScifi extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
        // setting: "",
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
        const regionArray = [ "Ashane" ,"Chitine Region" ,"Deep Imaskar Region" ,"Delimbiyr Vale" ,"Earthfast Mountains" ,"Far Hills, The" ,"Forest of Lethyr" ,"Gloaming Region" ,"Gnoll" ,"Grimlock Region" ,"High Forest" ,"Icerim Mountains" ,"Kuo-Toa Region" ,"Loxo" ,"Rethild" ,"Shaar, The" ,"Slyth Region" ,"Sphur Upra" ,"Stormhorns, The" ,"Surkh" ,"Taer" ,"Thri-Kreen" ,"Underdark (Deep Imaskar)" ,"Underdark (Fluvenilstra)" ,"Underdark (Reeshov)" ,"Underdark (Sloopdilmonpolop)" ,"Underdark (Yathcol)" ,"Volodni" ,"Chult" ,"Galena Mountains" ,"Great Glacier" ,"Great Rift" ,"Oldonnar" ,"Smoking Mountains" ,"Spine of the World" ,"Turmish" ,"Underdark (Darklands)" ,"Underdark (Earthroot)" ,"Underdark (Northdark)" ,"Underdark (Old Shanatar)" ,"Waterdeep" ,"Elf Regions" ,"Chondalwood" ,"Cormanthor" ,"Elf, Star" ,"Elven Court" ,"Evereska" ,"Evermeet" ,"Forest of Amtar" ,"Forest of Lethyr" ,"High Forest" ,"Menzoberranyr" ,"Misty Vale" ,"Outer Sea, The" ,"Sildeyuir" ,"Silverymoon" ,"Snow Eagle Aerie" ,"Waterdeep" ,"Wealdath, The" ,"Yuirwood, The" ,"Gnome Regions" ,"Great Dale" ,"Lantan" ,"Rathgaunt Hills" ,"Underdark (Northdark)" ,"Western Heartlands" ,"Half-Elf Regions" ,"Aglarond" ,"Dalelands" ,"Dambrath" ,"High Forest" ,"Silverymoon" ,"Waterdeep" ,"Halfling Regions" ,"Amn" ,"Calimshan" ,"Channath Vale" ,"Luiren" ,"North, The" ,"Western Heartlands" ,"Human Regions" ,"Aglarond" ,"Altumbel" ,"Amn" ,"Anauroch" ,"Calimshan" ,"Chessenta" ,"Chult" ,"Cormyr" ,"Dalelands" ,"Damara" ,"Dambrath" ,"Dragon Coast" ,"Endless Wastes" ,"Golden Water" ,"Great Dale" ,"Great Glacier" ,"Halruaa" ,"Hordelands" ,"Impiltur" ,"Lake of Mists" ,"Lake of Steam" ,"Lantan" ,"Lapaliiya" ,"Moonsea" ,"Moonshae Isles" ,"Mulhorand" ,"Narfell" ,"Nelanther Isles" ,"North, The" ,"Rashemen" ,"Ride, The" ,"Samarach" ,"Sembia" ,"Shaar, The" ,"Shadovar" ,"Shou Expatriate" ,"Silverymoon" ,"Swagdar" ,"Sword Coast, The" ,"Tashalar" ,"Tethyr" ,"Tharsult" ,"Thay" ,"Thesk" ,"Thindol" ,"Turmish" ,"Underdark (Old Shanatar)" ,"Unther" ,"Uthgardt Tribesfolk" ,"Vaasa" ,"Vast, The" ,"Vilhon Reach" ,"Waterdeep" ,"Western Heartlands" ,"Wizard's Reach" ,"Orc and Half-Orc Regions" ,"Amn" ,"Chessenta" ,"Hordelands" ,"Impiltur" ,"Moonsea" ,"Silver Marches" ,"Thesk" ,"Underdark (Northdark)" ,"Vaasa" ,"Western Heartlands" ]
        const trait1Array =  ["Honest","Brave","Compassionate","Leader","Courageous","Unselfish","Loyal","Hard-working","Independent","Selfish","Responsible","Considerate","Self-confident","Humble","Poor","Rich","Strong","Tall","Dark","Light","Handsome","Pretty","Ugly","Messy","Gentle","Wild","Joyful","Busy","Patriotic","Neat","Popular","Successful","Short","Prim","Proper","Dainty","Able","Fighter","Tireless","Plain","Expert","Imaginative","Conceited","Mischievous","Demanding","Thoughtful","Keen","Happy","Disagreeable","Simple","Fancy","Plain","Excited","Studious","Inventive","Creative","Thrilling","Intelligent","Proud","Fun-loving","Daring","Bright","Serious","Funny","Humorous","Sad","Lazy","Dreamer","Helpful","Simple-minded","Friendly","Adventurous","Timid","Shy","Pitiful","Cooperative","Lovable","Ambitious","Quiet","Curious","Reserved","Pleasing","Bossy","Witty","Energetic","Cheerful","Smart","Impulsive","Humorous","Sad","Lazy","Dreamer","Helpful"]
        const trait2Array = [ "Honest","Brave","Compassionate","Leader","Courageous","Unselfish","Loyal","Hard-working","Independent","Selfish","Responsible","Considerate","Self-confident","Humble","Poor","Rich","Strong","Tall","Dark","Light","Handsome","Pretty","Ugly","Messy","Gentle","Wild","Joyful","Busy","Patriotic","Neat","Popular","Successful","Short","Prim","Proper","Dainty","Able","Fighter","Tireless","Plain","Expert","Imaginative","Conceited","Mischievous","Demanding","Thoughtful","Keen","Happy","Disagreeable","Simple","Fancy","Plain","Excited","Studious","Inventive","Creative","Thrilling","Intelligent","Proud","Fun-loving","Daring","Bright","Serious","Funny","Humorous","Sad","Lazy","Dreamer","Helpful","Simple-minded","Friendly","Adventurous","Timid","Shy","Pitiful","Cooperative","Lovable","Ambitious","Quiet","Curious","Reserved","Pleasing","Bossy","Witty","Energetic","Cheerful","Smart","Impulsive","Humorous","Sad","Lazy","Dreamer","Helpful"]
        const backgroundArray = [ "Agent", "Pilot", "Astronaut", "ambassador", "Broker", "Hacker", "Engineer", "Mercenary", "High School Jock", "Street Kid", "Wealthy Upbringing", "Noble", "Bartender", "Band Member", "Record Contract", "Street Thug", "Gangster", "Con Artist", "Burglar", "Prison", "Sports Scholarship", "Pro Athlete", "Superstar Athlete", "College", "Advanced College", "Doctorate", "Field Scientist", "Counsellor", "Military Academy", "Starfleet Cadet Cruise", "Starfleet Tour", "Starship Engineer", "Starship Science Officer", "Starship Communications Officer", "Starship Counsellor", "Starship Medical Officer", "Starship Security Officer", "Starship Helmsman", "Academy Teaching", "Starbase Assignment", "Space Marines Cadet Assignment", "Space Marines Tour of Duty", "Starfleet Intelligence Recruit", "Police Officer", "Detective", "Psi-Corps", "Smuggler", "Drifter", "Gambler", "Space Jockey", "Priest" ]
        const storyhookArray = [ "Aliens who only communicate with sign language invade. To avoid war, our governments must engage a vastly marginalized portion of the human population: the hearing-impaired.", "A rogue planet with strange properties collides with our sun, and after it’s all over, worldwide temperature falls forty degrees. Write from the perspective of a someone trying to keep his tropical fruit trees alive.", "Ever read about the world’s loneliest whale? Write a story in which he’s actually the survivor of an aquatic alien species which crashed here eons ago, and he’s trying very hard to learn the “local” whale language so he can fit in. Write from his perspective the first time he makes contact.", "An alien planet starts receiving bizarre audio transmissions from another world (spoiler: they’re from Earth). What does it mean? Are they under attack? Some think so…until classic rock ‘n’ roll hits the airwaves, and these aliens discover dancing. Write from the perspective of the teenaged alien who first figures it out.", "Take anything we find normal today (shopping malls, infomercials, products to remove facial hair, etc.) and write a story from the perspective of an archeologist five thousand years in the future who just unearthed this stuff, has NO idea what any of it was for, and has to give a speech in an hour explaining the historical/religious/sociological significance.", "Housecats are aliens who have succeeded in their plan to rule the world. Discuss.", "A highschooler from fifteen hundred years in our future is assigned a one-page writing project on a twenty-first century person’s life based entirely on TV commercials. Write the beginning of the essay.", "Timetravel works, but only once in a person’s life. Write from the perspective of someone who chooses to go back in time, knowing they can never return. Where do they go and why?", "So yeah, ancient Egypt really was “all that” after all, and the pyramids turn out to be fully functional spaceships (the limestone was to preserve the electronics hidden inside). Write from the perspective of the tourist who accidentally turns one on.", "The remarkable San people of South Africa are widely considered the most ancient race of human beings on the planet. Write a story in which their unique genetic structure has been preserved by the thousands-of-years-ago creation of nanobots.", "More Sci-Fi Story Ideas", "Take this set of fascinating facts from Chinese history and write a story about the “fortune-teller” (translation: con-artist who knows science) who invented the compass before selling it to the explorer and mapmaker, Zheng He.", "Ten years from now, scientists figure out how to stop human aging and extend life indefinitely—but every time someone qualifies for that boost, someone else has to die to keep the surplus population in check. Oh, it’s all very humane; one’s descendants get a huge paycheck. Write from the perspective of someone who just got a letter in the mail saying they’re the one who has to die.", "In the future, neural implants translate music into physical pleasure, and earphones (“jacking in”) are now the drug of choice. Write either from the perspective of a music addict, OR the Sonforce agent (sonance + enforcer) who has the job of cracking down.", "It’s the year 5000. Our planet was wrecked in the great Crisis of 3500, and remaining human civilization survives only in a half dozen giant domed cities. There are two unbreakable rules: strict adherence to Life Quality (recycling doesn’t even begin to cover these laws), and a complete ban on reproduction (only the “worthy” are permitted to create new humans). Write from the perspective of a young woman who just discovered she’s been chosen to reproduce—but she has no interest in being a mother.", "In the nineteenth century, there’s a thriving trade in stolen archeological artifacts. Write a story from the perspective of an annoyed, minimum-wage employee whose job is traveling back in time to obtain otherwise unobtainable artifacts, then has to bring them back to the present (the 1800s, that is) and artificially age them before they will sell.", "Steampunk! Write a story from the perspective of a hot air balloon operator who caters to folks who like a little thrill… which means she spends half her time in the air shooting down pterodactyls before the paying customers get TOO scared.", "Human genetic modification has gone too far, and the biggest trend for teenagers is to BECOME their favorite fictional character. Describe the scene from a bored security guard’s point of view as he has to break up a fight between an anime character (I dare you to use Goku from Dragonball Z) and a Brony.", "It is the Edo period in Japan (1603-1868), and the practice of Sakoku is in full effect, completely closing off the country to Western influence. The reason, however, is not to eschew Western culture, but instead to protect the aliens that landed in the middle of Kyoto and are trying desperately to repair their ship and get home. Write from the perspective of one of the few remaining Samurai assigned to protect and keep these aliens a secret.", "Creation myth! Write from the perspective of a crazy scientist in the year 28,000 who, determined to discover how the universe began, rigs up a malfunctioning time machine, goes to the “beginning” of the universe, and ends up being the reason for the Big Bang. (Logic? Causal effect? Pfft. Hush, it’s time-travel, and that was never logical.)", "It turns out dinosaurs were completely sentient creatures, thank you very much, and most of them actually left the planet in their gigantic and REALLY WEIRD spaceship when they realized an asteroid was coming. They’ve decided that enough time has passed and the Earth has probably recovered by now, so today, at twelve noon, they’re coming home." ]
        
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
            // setting: "Sci-fi",
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
                <fieldset className='random-form'>     
                <form onSubmit={this.handleClick} >
                    <button type="submit" className='random-button'>Random Sci-fi Character</button>
                </form>
                </fieldset>
            </div>
        )
    }
}

export default connect(null, { addCharacter })(RandomCharacterScifi)
