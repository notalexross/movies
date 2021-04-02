import { useLocation } from 'react-router-dom'
import { Container } from '../components'
import { ResultsContainer } from '../containers'

export default function Results() {
  const { pathname, search } = useLocation()

  const searchParams = new URLSearchParams(search)
  const query = searchParams.get('query')

  let title
  switch (pathname) {
    case '/popular':
      title = 'Popular'
      break
    case '/now_playing':
      title = 'Recent'
      break
    case '/top_rated':
      title = 'Top Rated'
      break
    default:
      title = `Search results for: "${query}"`
  }

  return (
    <Container>
      <ResultsContainer key={pathname + query} path={pathname} query={query} title={title} />
    </Container>
  )
}
