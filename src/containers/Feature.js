import React, { useState } from 'react'
import { Feature } from '../components'
import VideoPlayerContainer from './VideoPlayer'
import {
  getVideos,
  getStreamProviders,
  getReleaseInfo,
  getMainGenres,
  getMainCrew
} from '../utils/api'
import { formatDateGB, formatTime, formatYear, numToPercentage } from '../utils/format'
import { IMAGE_URLS, CONFIG } from '../constants'

export default function FeatureContainer({ details }) {
  const [videoIsOpen, setVideoIsOpen] = useState(false)

  const backgroundImg = details.backdrop_path && `${IMAGE_URLS.IMAGE_1280}${details.backdrop_path}`
  const featureImg = details.poster_path && `${IMAGE_URLS.IMAGE_300}${details.poster_path}`
  const videos = getVideos(details)
  const { providers, justWatchLink } = getStreamProviders(details, CONFIG.MAX_PROVIDERS)
  const { releaseDate, certification, releaseDateRegion } = getReleaseInfo(details)
  const genres = getMainGenres(details, CONFIG.MAX_GENRES)
  const crew = getMainCrew(details, CONFIG.MAX_CREW)

  const handleOpenTrailer = () => {
    setVideoIsOpen(true)
  }

  return (
    <>
      <VideoPlayerContainer isOpen={videoIsOpen} setIsOpen={setVideoIsOpen} videos={videos} />
      <Feature backgroundSrc={backgroundImg}>
        <Feature.Poster>
          <Feature.Image src={featureImg} alt={details.title} title={details.title} />
          {providers && (
            <Feature.Watch>
              {providers.map(provider => (
                <Feature.Provider
                  key={provider.provider_id}
                  src={`${IMAGE_URLS.IMAGE_154}${provider.logo_path}`}
                  alt={provider.provider_name}
                  title={provider.provider_name}
                  href={justWatchLink}
                />
              ))}
              <Feature.Watch.Label>
                <Feature.Watch.Text>Now Streaming</Feature.Watch.Text>
                <Feature.Watch.Link href={justWatchLink}>
                  <Feature.JustWatchLogo
                    src={IMAGE_URLS.IMAGE_JUSTWATCH_LOGO}
                    alt="just watch"
                    title="JustWatch"
                  />
                  Watch Now
                </Feature.Watch.Link>
              </Feature.Watch.Label>
            </Feature.Watch>
          )}
        </Feature.Poster>
        <Feature.Content>
          <Feature.Title>
            {details.title}
            <Feature.TitleDate>{` (${formatYear(details.release_date)})`}</Feature.TitleDate>
          </Feature.Title>
          <Feature.Facts>
            {certification && (
              <Feature.Fact>
                <Feature.Certification>{certification}</Feature.Certification>
              </Feature.Fact>
            )}
            <Feature.Fact>
              {formatDateGB(releaseDate)}
              {releaseDateRegion && ` (${releaseDateRegion})`}
            </Feature.Fact>
            {genres && <Feature.Fact>{genres.join(', ')}</Feature.Fact>}
            <Feature.Fact>{formatTime(details.runtime)}</Feature.Fact>
            <Feature.Rate movieId={details.id} />
          </Feature.Facts>
          <Feature.Actions>
            <Feature.Action>
              <Feature.Rating>
                {`${numToPercentage(details.vote_average, 10, 0)} (${details.vote_count} votes)`}
              </Feature.Rating>
            </Feature.Action>
            <Feature.Action>
              <Feature.Favourite movie={details} />
            </Feature.Action>
            {videos && (
              <Feature.Action>
                <Feature.Trailer onClick={handleOpenTrailer}>Play Trailer</Feature.Trailer>
              </Feature.Action>
            )}
          </Feature.Actions>
          <Feature.Tagline>{details.tagline}</Feature.Tagline>
          <Feature.Subheading>Overview</Feature.Subheading>
          <Feature.Text>{details.overview}</Feature.Text>
          <Feature.People>
            {crew.map(member => (
              <Feature.Person key={member.id}>
                <Feature.Person.Name>{member.name}</Feature.Person.Name>
                <Feature.Person.Role>{member.roles.join(', ')}</Feature.Person.Role>
              </Feature.Person>
            ))}
            {Array(CONFIG.MAX_CREW - crew.length + 1)
              .fill()
              .map((_, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={idx} />
              ))}
          </Feature.People>
        </Feature.Content>
      </Feature>
    </>
  )
}
