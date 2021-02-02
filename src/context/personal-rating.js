import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

// window.localStorage.clear()

const loadedRating = JSON.parse(window.localStorage.getItem('ratings'))

function ContextProvider({ children }) {
    const [ ratings, setRatings ] = useState(loadedRating || {})
    
    const getRating = movieId => ratings[movieId]
    
    const setRating = (movieId, ratingIndex) => {
        setRatings(ratings => ({
            ...ratings,
            [movieId]: ratingIndex
        }))
    }
    
    useEffect(() => {
        window.localStorage.setItem('ratings', JSON.stringify(ratings))
    }, [ratings])
    
    return (
        <Context.Provider value={{
            getRating,
            setRating
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context as PersonalRatingContext, ContextProvider as PersonalRatingContextProvider }