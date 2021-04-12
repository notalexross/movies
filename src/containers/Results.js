import React, { useEffect, useState } from 'react'
import { getMoviesListUrl, getSearchResultsUrl } from '../utils/api'
import CardsContainer from './Cards'
import { Button } from '../components'

export default function ResultsContainer({ path, query, title }) {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [results, setResults] = useState([])

  const handleClick = () => {
    setPage(state => (state < totalPages ? state + 1 : state))
  }

  useEffect(() => {
    let url
    if (query) {
      url = getSearchResultsUrl(query, page)
    } else {
      url = getMoviesListUrl(path, page)
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          setResults(state => [...state, ...data.results])
          if (page === 1) {
            setTotalPages(data.total_pages)
            setTotalResults(data.total_results)
          }
        }
      })
      .catch(err => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <section>
      <h1>{title}</h1>
      {query && <p style={{ marginTop: '0.35rem' }}>{`${totalResults} results`}</p>}
      <CardsContainer results={results} />
      <Button isShown={page < totalPages} onClick={handleClick}>
        Load More
      </Button>
    </section>
  )
}
