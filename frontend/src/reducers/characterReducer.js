export default (state = { characters: [], loading: false}, action) => {
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
                characters: [...state.characters.filter(character => character.setting === "General")],
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
                characters: [...state.characters.filter(character => character.setting === "Sci-fi")],
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
                characters: [...state.characters.filter(character => character.setting === "Fantasyl")],
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

        default:
            return state
    }
}