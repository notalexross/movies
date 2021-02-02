import { useContext } from 'react'
import { Container } from '../components'
import { FavouritesContainer } from '../containers'
import { FavouritesContext } from '../context/favourites.js'

export default function Favourites() {
    const { sortBy } = useContext(FavouritesContext)

    return (
        <Container>
            <FavouritesContainer key={sortBy} />
        </Container>
    )
}