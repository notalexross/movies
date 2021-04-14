const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

export function getMoviesListUrl(path, page) {
  return `${apiUrl}/movie${path}?api_key=${apiKey}&page=${page}`
}

export function getSearchResultsUrl(query, page) {
  return `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
}

export function getMovieDetailsUrl(movieId) {
  return `${apiUrl}/movie/${movieId}?api_key=${apiKey}&append_to_response=release_dates,videos,images,reviews,credits,recommendations,keywords`
}

export function getStreamProvidersUrl(movieId) {
  // MUST ATTRIBUTE SOURCE TO "JustWatch"
  return `${apiUrl}/movie/${movieId}/watch/providers?api_key=${apiKey}`
}

export function getVideos(details) {
  let videos
  if (details.videos && details.videos.results && details.videos.results.length) {
    videos = details.videos.results
  }

  return videos
}

export function getStreamProviders(details, maxStreamProviders) {
  let providers
  let justWatchLink
  if (details.providers && details.providers.GB && details.providers.GB.flatrate) {
    providers = details.providers.GB.flatrate
      .slice(0, maxStreamProviders)
      .sort((a, b) => a.display_priority - b.display_priority)
    justWatchLink = details.providers.GB.link
  }

  return { providers, justWatchLink }
}

export function getReleaseInfo(details) {
  let releaseDate = details.release_date
  let certification
  let releaseDateRegion
  if (details.release_dates && details.release_dates.results) {
    const releaseGB = details.release_dates.results.find(result => result.iso_3166_1 === 'GB')
    if (releaseGB && releaseGB.release_dates && releaseGB.release_dates.length) {
      const dates = releaseGB.release_dates
      releaseDate = dates[0].release_date
      certification = dates[0].certification
      releaseDateRegion = 'GB'
    }
  }

  return { releaseDate, certification, releaseDateRegion }
}

export function getMainGenres(details, maxGenres) {
  let genres = []
  if (details.genres) {
    genres = details.genres.slice(0, maxGenres).map(genre => genre.name)
  }

  return genres
}

function getUniquePeople(people) {
  const uniquePeople = []

  people.forEach(person => {
    const uniqueIndex = uniquePeople.findIndex(uniquePerson => uniquePerson.id === person.id)
    if (uniqueIndex >= 0) {
      uniquePeople[uniqueIndex].roles.push(person.job)
    } else {
      uniquePeople.push({
        id: person.id,
        name: person.name,
        roles: [person.job]
      })
    }
  })

  return uniquePeople
}

function hasCrew(details) {
  return details && details.credits && details.credits.crew && details.credits.crew.length
}

export function getMainCrew(details, maxCrewMembers) {
  const roles = ['director', 'writer', 'screenplay']

  if (hasCrew(details)) {
    const { crew } = details.credits
    const filteredCrew = crew.filter(member => roles.includes(member.job.toLowerCase()))
    const sortedCrew = filteredCrew
      .slice()
      .sort((a, b) => roles.indexOf(a.job.toLowerCase()) - roles.indexOf(b.job.toLowerCase()))
    const uniqueCrew = getUniquePeople(sortedCrew)
    const mainCrew = uniqueCrew.slice(0, maxCrewMembers)

    return mainCrew
  }

  return []
}

function getVideoSiteUrl(video) {
  const urls = {
    youtube: 'https://www.youtube.com/embed/',
    vimeo: 'https://vimeo.com/'
  }

  const siteUrl = urls[video.site.toLowerCase()]

  return siteUrl
}

function isValidVideoObject(video) {
  return video && video.key && video.site && getVideoSiteUrl(video)
}

export function getPlayVideoUrl(video) {
  if (isValidVideoObject(video)) {
    const videoUrl = getVideoSiteUrl(video) + video.key

    return videoUrl
  }

  return null
}

function hasCast(details) {
  return details && details.credits && details.credits.cast && details.credits.cast.length
}

export function getTopCast(details, maxCastMembers) {
  if (hasCast(details)) {
    const { cast } = details.credits
    const sortedCast = cast.slice().sort((a, b) => a.order - b.order)
    const topCast = sortedCast.slice(0, maxCastMembers)

    return topCast
  }

  return []
}

function hasRecommendations(details) {
  return (
    details &&
    details.recommendations &&
    details.recommendations.results &&
    details.recommendations.results.length
  )
}

export function getTopRecommendations(details, maxRecommendations) {
  if (hasRecommendations(details)) {
    const recommendations = details.recommendations.results
    const topRecommendations = recommendations.slice(0, maxRecommendations)

    return topRecommendations
  }

  return []
}
