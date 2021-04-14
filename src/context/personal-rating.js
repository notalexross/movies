import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()
const storedRatings = JSON.parse(window.localStorage.getItem('ratings'))

function ContextProvider({ children }) {
  const [ratings, setRatings] = useState(storedRatings || {})

  const getRating = movieId => ratings[movieId]

  const setRating = (movieId, ratingIndex) => {
    setRatings(state => ({
      ...state,
      [movieId]: ratingIndex
    }))
  }

  useEffect(() => {
    window.localStorage.setItem('ratings', JSON.stringify(ratings))
  }, [ratings])

  return (
    <Context.Provider
      value={{
        getRating,
        setRating
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context as PersonalRatingContext, ContextProvider as PersonalRatingContextProvider }
