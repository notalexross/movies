// TODO: The ratings will not update once added to favourites currently.
// Ideally, would take only id and update rest of data on page load, but the api doesn't support multiple ids in a single request.
// Maybe gradually update the data when loaded in (only on clicking load more) if 24 hours since last update.

import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

// window.localStorage.clear()

const sortByLoaded = JSON.parse(window.localStorage.getItem('sort-by'))
const favouritesLoaded = JSON.parse(window.localStorage.getItem('favourites'))

function ContextProvider({ children }) {
  const [favourites, setFavourites] = useState(favouritesLoaded || [])
  const [favouritesSorted, setFavouritesSorted] = useState([])
  const [sortBy, setSortBy] = useState(sortByLoaded || 'timestamp_favourited,desc')

  const saveToLocal = () => {
    window.localStorage.setItem('sort-by', JSON.stringify(sortBy))
    window.localStorage.setItem('favourites', JSON.stringify(favourites))
  }

  const addToFavourites = newEntry => {
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

  const sortFavourites = () => {
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
  }

  useEffect(() => {
    sortFavourites()
    saveToLocal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, favourites])

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
