import React, { useContext, useState } from 'react'
import CardsContainer from './Cards'
import SortContainer from './Sort'
import { Button } from '../components'
import { FavouritesContext } from '../context/favourites'
import { CONFIG } from '../constants'

export default function FavouritesContainer() {
  const { favouritesSorted } = useContext(FavouritesContext)
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(favouritesSorted.length / CONFIG.FAVOURITES_PER_PAGE)
  const favourites = favouritesSorted.slice(0, page * CONFIG.FAVOURITES_PER_PAGE)

  const handleClick = () => {
    setPage(state => (state < totalPages ? state + 1 : state))
  }

  // TODO: maybe add a confirmation button before doing "setSortBy", so doesn't lag.
  // disable button whilst loading.
  return (
    <section>
      <h1>Bookmarks</h1>
      <SortContainer />
      <CardsContainer results={favourites} />
      <Button isShown={page < totalPages} onClick={handleClick}>
        Load More
      </Button>
    </section>
  )
}
