export default (state = { characters: [], likes: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_CHARACTERS":
            return {
                ...state,
                loading: true
            }
        case "CHARACTERS_LOADED":
            return {
                 ...state, 
                characters: action.payload,
                loading: false
            }

        case "LOADING_GENERAL_CHARACTERS":
            return {
                ...state,
                loading: true
            }
        case "GENERAL_CHARACTERS_LOADED":
            return {
                ...state, 
                characters: action.payload.filter(character => character.setting === "General"),
                loading: false
            }
        case "LOADING_SCIFI_CHARACTERS":
            return {
                ...state,
                loading: true
            }
        case "SCIFI_CHARACTERS_LOADED":
            return {
                ...state, 
                characters: action.payload.filter(character => character.setting === "Sci-fi"),
                loading: false
            }
        case "LOADING_FANTASY_CHARACTERS":
            return {
                ...state,
                loading: true
            }
        case "FANTASY_CHARACTERS_LOADED":
            return {
                ...state, 
                characters: action.payload.filter(character => character.setting === "Fantasy"),
                loading: false
            }

        case "ADDING_CHARACTER":
            return {
                ...state,
                loading: true
            }

        case "CHARACTER_ADDED":
            return {
                ...state,
                characters: [...state.characters, action.payload],
                loading: false
            }
        case "DELETING_CHARACTER":
            return {
                ...state,
                loading: true
            }
        case "CHARACTER_DELETED":
            return {
                ...state,
                characters: [...state.characters.filter(character => character.id !== parseInt(action.payload))],
                loading: false
            }
//////////////////////////
        case "LOADING_LIKES":
            return {
                ...state,
                loading: false
            }

        case "ADDING_LIKES":
            return {
                ...state,
                likes: [...state.likes, action.payload],
                loading: false
            }
////////////////////////
        default:
            return state
    }
}
/*A reducer is a function that determines changes to an application's state. 
It uses the action it receives to determine this change. 
We have tools, like Redux, that help manage an application's state changes in a single store so that they behave consistently.*/