const codeSnippet = () => {
    return (
        <>
        {`"//FavouritesProvider.jsx
        
use client"
import { useReducer, createContext } from "react"
import FavouritesReducer from "./FavouritesReducer"

// Global State, initialize favourites array
const initialState = {
    favourites: []
}


// Create context
export const GlobalContext = createContext(initialState)


// Provider component
// children are the components wrapped by this provider
export default function FavouritesProvider({ children }) {

    //initialise reducer
    const [state, dispatch] = useReducer(FavouritesReducer, initialState)

    // Actions
    function addFavourite(favourites) {

        // check for existing favourites
        // if true - set isFavourite to true
        // if false - set isFavourite to false
        // ensures that the sticker renders correctly
        if (state.favourites.length > 0) {}
        state.favourites.map((stateFavourite) => {
            if (favourites.id == stateFavourite.id) {
                favourites.isFavourite = true;
            } else {
                favourites.isFavourite = false;
            }
        })
            
        
        dispatch({
            type: 'ADD_FAVOURITE',
            payload: favourites
            
        }) 
    }


    function removeFavourite(id) {
        dispatch({
            type: 'REMOVE_FAVOURITE',
            payload: id
        })
    }

   

    return (
        <GlobalContext.Provider
            value={{
                state,
                addFavourite,
                removeFavourite
            }}>
            {children}
        </GlobalContext.Provider>

    )

}

//FavouritesReducer.jsx

"use client"

// Favourites Reducer
// Handles state changes for favourites
// addFavourite takes movie object as payload
// removeFavourite takes movie id as payload
export default function FavouritesReducer(state, action) {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return {
                ...state,
                favourites: [action.payload, ...state.favourites]
            }
        case 'REMOVE_FAVOURITE':
            return {
                ...state,
                favourites: state.favourites.filter(favourite => favourite.id !== action.payload)
            }
        default:
            return state
    }
}`}
        </>
    );
}

export default codeSnippet;