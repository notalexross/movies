import { Cards } from '../components'
import { formatDate } from '../utils/format'
import { IMAGE_URLS } from '../constants'

export default function CardsContainer({ results = [] }) {
  return (
    <Cards>
      {results.map(result => (
        <Cards.Card key={result.id} to={`/movie/${result.id}`}>
          <Cards.Card.ImageWrapper>
            <Cards.Card.Bookmark movie={result} />
            <Cards.Card.Image
              src={result.poster_path && `${IMAGE_URLS.IMAGE_300}${result.poster_path}`}
              alt={result.title}
            />
          </Cards.Card.ImageWrapper>
          {Boolean(result.vote_count) && (
            <Cards.Card.Rating>{result.vote_average}</Cards.Card.Rating>
          )}
          <Cards.Card.Content>
            <Cards.Card.Title>{result.title}</Cards.Card.Title>
            <Cards.Card.Release>{formatDate(result.release_date)}</Cards.Card.Release>
          </Cards.Card.Content>
        </Cards.Card>
      ))}
    </Cards>
  )
}
