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