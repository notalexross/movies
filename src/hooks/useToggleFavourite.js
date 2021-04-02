import { useState, useContext } from 'react'
import { FavouritesContext } from '../context/favourites'

export default function useToggleFavourite(movie) {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)
  const [isFavourite, setIsFavourite] = useState(
    !!favourites.find(favourite => favourite.id === movie.id)
  )

  const handleClick = event => {
    event.preventDefault()
    document.activeElement.blur()
    if (movie) {
      if (isFavourite) {
        removeFromFavourites(movie.id)
        setIsFavourite(false)
      } else {
        addToFavourites(movie)
        setIsFavourite(true)
      }
    }
  }

  return [isFavourite, handleClick]
}
