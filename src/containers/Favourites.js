import React, { useContext, useState } from 'react'
import { CardsContainer, SortContainer } from '.'
import { Button } from '../components'
import { FavouritesContext } from '../context/favourites.js'

const resultsPerPage = 20

export default function FavouritesContainer() {
    const { favouritesSorted } = useContext(FavouritesContext)
    const [ page, setPage ] = useState(1)
    
    const totalPages = Math.ceil(favouritesSorted.length / resultsPerPage)
    const favourites = favouritesSorted.slice(0, page * resultsPerPage)

    const handleClick = () => {
        setPage(page => page < totalPages ? page + 1 : page)
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