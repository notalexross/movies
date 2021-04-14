import { useLocation } from 'react-router-dom'
import { Container } from '../components'
import { ResultsContainer } from '../containers'
import { getPageTitleFromPathQuery } from '../utils/format'

export default function Results() {
  const { pathname, search } = useLocation()

  const searchParams = new URLSearchParams(search)
  const query = searchParams.get('query')
  const title = getPageTitleFromPathQuery(pathname, query)

  return (
    <Container>
      <ResultsContainer key={pathname + query} path={pathname} query={query} title={title} />
    </Container>
  )
}
