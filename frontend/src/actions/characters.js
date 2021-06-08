export const getCharacters = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_CHARACTERS" })
        fetch('/characters')
        .then(res => res.json())
        .then(characters => dispatch({
            type: "CHARACTERS_LOADED",
            payload: characters 
         }))
    }
}
/// fetch onlly general characters
export const getGeneralCharacters = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_GENERAL_CHARACTERS" })
        fetch('/characters')
        .then(res => res.json())
        .then(generalCharacters => dispatch({
            type: "GENERAL_CHARACTERS_LOADED",
            payload: generalCharacters 
         }))
    }
}
// fetch only sci fi characters
export const getScifiCharacters = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_SCIFI_CHARACTERS" })
        fetch('/characters')
        .then(res => res.json())
        .then(scifiCharacters => dispatch({
            type: "SCIFI_CHARACTERS_LOADED",
            payload: scifiCharacters 
         }))
    }
}
//fetch only fantasy characters
export const getFantasyCharacters = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_FANTASY_CHARACTERS" })
        fetch('/fantsy')
        .then(res => res.json())
        .then(fantasyCharacters => dispatch({
            type: "FANTASY_CHARACTERS_LOADED",
            payload: fantasyCharacters 
         }))
    }
}

export const addCharacter = (character) => {
    return (dispatch) => {
        dispatch({ type: "ADDING_CHARACTER" })
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character) 
        }
        fetch('/characters', configObj)
        .then(res => res.json())
        .then(character => dispatch({
            type: "CHARACTER_ADDED",
            payload: character
        }))
    }
}

export const deleteCharacter = (id) => {
    return (dispatch) => {
        dispatch({ type: "DELETING_CHARACTER"})
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            } 
        }
        fetch(`/characters/${id}`, configObj)
        .then(() => dispatch({
            type: "CHARACTER_DELETED",
            payload: id
        }))
    }    
}