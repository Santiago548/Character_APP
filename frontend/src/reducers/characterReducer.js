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
        default:
            return state
    }
}