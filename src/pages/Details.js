import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FeatureContainer, ContentContainer } from '../containers'
import { getMovieDetailsUrl, getStreamProvidersUrl } from '../utils/api'

export default function Details() {
  const { movieId } = useParams()
  const [details, setDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const updateMovieDetails = () => {
    setIsLoading(true)

    const fetchRequests = [
      fetch(getMovieDetailsUrl(movieId)),
      fetch(getStreamProvidersUrl(movieId))
    ]

    Promise.all(fetchRequests)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        const combinedData = {
          ...data[0],
          providers: data[1].results
        }
        setDetails(combinedData)
        setIsLoading(false)
      })
      .catch(err => console.error(err))
  }

  useEffect(updateMovieDetails, [movieId])

  return !isLoading ? (
    <>
      <FeatureContainer details={details} />
      <ContentContainer details={details} />
    </>
  ) : null
}
