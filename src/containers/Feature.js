import React, { useState } from 'react'
import { Feature } from '../components'
import VideoPlayerContainer from './VideoPlayer'
import { getMainCrew } from '../utils/api'
import { formatDateGB, formatTime, formatYear, numToPercentage } from '../utils/format'
import { IMAGE_URLS } from '../constants'

// TODO: Make maxProviders depend on the space available.
// maybe make them wrap and put overflow on the container and max height.
const maxProviders = 2 // must be set to 2 currently, for when small.
const maxGenres = 4
const maxCrew = 3

export default function FeatureContainer({ details }) {
  const [videoIsOpen, setVideoIsOpen] = useState(false)

  // TODO: get the direct link to justWatch page, not via TMDB...
  let providers
  let justWatchLink
  if (details.providers && details.providers.GB && details.providers.GB.flatrate) {
    providers = details.providers.GB.flatrate
      .slice(0, maxProviders)
      .sort((a, b) => a.display_priority - b.display_priority)
    justWatchLink = details.providers.GB.link
  }

  let genres = []
  if (details.genres) {
    genres = details.genres.slice(0, maxGenres).map(genre => genre.name)
  }

  let releaseDateGB = details.release_date
  let certificationGB
  let releaseDateRegion
  if (details.release_dates && details.release_dates.results) {
    const releaseGB = details.release_dates.results.find(result => result.iso_3166_1 === 'GB')
    if (releaseGB && releaseGB.release_dates && releaseGB.release_dates.length) {
      const dates = releaseGB.release_dates
      releaseDateGB = dates[0].release_date
      certificationGB = dates[0].certification
      releaseDateRegion = 'GB'
    }
  }

  let videos
  if (details.videos && details.videos.results && details.videos.results.length) {
    videos = details.videos.results
  }

  const handleOpenTrailer = () => {
    setVideoIsOpen(true)
  }

  const crew = getMainCrew(details, maxCrew)
  // TODO: same for cast

  // TODO: trailer button should only show if a video is available
  // TODO: get main people: director, writer, screenplay, etc.
  // TODO: link rating to review section.
  // TODO: fix poster aspect ratio for when no poster image. Also add an icon in its place.
  // TODO: add icons for missing people too in rest of details page (not this container)

  return (
    <>
      <VideoPlayerContainer isOpen={videoIsOpen} setIsOpen={setVideoIsOpen} videos={videos} />
      <Feature backgroundSrc={details.backdrop_path && `${IMAGE_URLS.IMAGE_1280}${details.backdrop_path}`}>
        <Feature.Poster>
          <Feature.Image
            src={details.poster_path && `${IMAGE_URLS.IMAGE_300}${details.poster_path}`}
            alt={details.title}
            title={details.title}
          />
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
            {certificationGB && (
              <Feature.Fact>
                <Feature.Certification>{certificationGB}</Feature.Certification>
              </Feature.Fact>
            )}
            <Feature.Fact>
              {formatDateGB(releaseDateGB)}
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
            {Array(maxCrew - crew.length + 1)
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
