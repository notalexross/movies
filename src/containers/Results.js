import React, { useEffect, useState } from 'react'
import { getUrl, getSearchUrl } from '../config'
import { CardsContainer } from '.'
import { Button } from '../components'

export default function ResultsContainer({ path, query, title }) {  
    const [ page, setPage ] = useState(1)
    const [ totalPages, setTotalPages ] = useState(0)
    const [ totalResults, setTotalResults ] = useState(0)
    const [ results, setResults ] = useState([])

    const handleClick = () => {
        setPage(page => (
            page < totalPages ? page + 1 : page
        ))
    }
    
    useEffect(() => {
        console.log('fetching')
        let url
        if (query) {
            url = getSearchUrl(query, page)
        } else {
            url = getUrl(path, page)
        }
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setResults(results => ([...results, ...data.results]))
                if (page === 1) {
                    setTotalPages(data.total_pages)
                    setTotalResults(data.total_results)
                }
            })
            .catch(err => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    
    return (
        <section>
            <h1>{title}</h1>
            {query && (
                <p style={{ marginTop: '0.35rem'}}>{totalResults} results</p>
            )}
            <CardsContainer results={results} />
            <Button isShown={page < totalPages} onClick={handleClick}>
                Load More
            </Button>
        </section>
    )
}