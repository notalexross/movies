import { Cards } from '../components'
import { formatDate } from '../utils'

export default function CardsContainer({ results = [] }) {
  const imagePath = 'https://image.tmdb.org/t/p/w300'

  return (
    <Cards>
      {results.map(result => (
        <Cards.Card key={`${result.id}`} to={`/movie/${result.id}`}>
          <Cards.Card.ImageWrapper>
            <Cards.Card.Bookmark movie={result} />
            <Cards.Card.Image
              src={result.poster_path && `${imagePath}${result.poster_path}`}
              alt={result.title}
            />
          </Cards.Card.ImageWrapper>
          {Boolean(result.vote_count) && (
            <Cards.Card.Rating>{result.vote_average}</Cards.Card.Rating>
          )}
          <Cards.Card.Content>
            <Cards.Card.Title>{result.title}</Cards.Card.Title>
            <Cards.Card.Release>{formatDate(result.release_date)}</Cards.Card.Release>
            {/* <Cards.Card.Bookmark></Cards.Card.Bookmark> */}
          </Cards.Card.Content>
        </Cards.Card>
      ))}
    </Cards>
  )
}
