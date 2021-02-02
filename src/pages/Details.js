import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FeatureContainer, ContentContainer } from '../containers'
import { getDetailsUrl, getProvidersUrl } from '../config'

export default function Details() {
    const { movieId } = useParams()
    const [ details, setDetails ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        console.log('fetching movie details')
        Promise.all([
            fetch(getDetailsUrl(movieId)),
            fetch(getProvidersUrl(movieId))
        ]).then(responses => (
            Promise.all(responses.map(response => response.json()))
        )).then(data => {
            const combined = {
                ...data[0],
                providers: data[1].results
            }
            setDetails(combined)
            setIsLoading(false)
        }).catch(err => console.error(err))
    }, [movieId])
    
    return !isLoading ? (
        <>
            <FeatureContainer details={details}/>
            <ContentContainer details={details}/>
        </>
    ) : null
}