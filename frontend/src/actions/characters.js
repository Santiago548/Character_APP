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