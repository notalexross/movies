import React, { createContext, useState, useEffect, useCallback } from 'react'

const Context = createContext()
const storedSortBy = JSON.parse(window.localStorage.getItem('sort-by'))
const storedFavourites = JSON.parse(window.localStorage.getItem('favourites'))

function ContextProvider({ children }) {
  const [favourites, setFavourites] = useState(storedFavourites || [])
  const [favouritesSorted, setFavouritesSorted] = useState([])
  const [sortBy, setSortBy] = useState(storedSortBy || 'timestamp_favourited,desc')

  const addToFavourites = newEntry => {
    // issue: ratings will never update in favourites unless removed and readded
    setFavourites(state => [
      ...state.filter(favourite => favourite.id !== newEntry.id),
      {
        ...newEntry,
        timestamp_favourited: Date.now()
      }
    ])
  }

  const removeFromFavourites = movieId => {
    setFavourites(state => state.filter(favourite => favourite.id !== movieId))
  }

  const sortFavourites = useCallback(() => {
    const sort = sortBy.split(',')
    const sorted = favourites.slice().sort((a, b) => {
      if (a[sort[0]] < b[sort[0]]) {
        return sort[1] === 'asc' ? -1 : 1
      } else if (a[sort[0]] > b[sort[0]]) {
        return sort[1] === 'asc' ? 1 : -1
      }

      return 0
    })
    setFavouritesSorted(sorted)
  }, [sortBy, favourites])

  useEffect(() => {
    const saveToLocal = () => {
      window.localStorage.setItem('sort-by', JSON.stringify(sortBy))
      window.localStorage.setItem('favourites', JSON.stringify(favourites))
    }

    sortFavourites()
    saveToLocal()
  }, [sortBy, favourites, sortFavourites])

  return (
    <Context.Provider
      value={{
        favourites,
        favouritesSorted,
        addToFavourites,
        removeFromFavourites,
        sortFavourites,
        setSortBy,
        sortBy
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context as FavouritesContext, ContextProvider as FavouritesContextProvider }
