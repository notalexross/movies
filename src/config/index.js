const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

function getUrl(path, page) {
  return `${apiUrl}/movie${path}?api_key=${apiKey}&page=${page}`
}

function getSearchUrl(query, page) {
  return `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
}

function getDetailsUrl(movieId) {
  return `${apiUrl}/movie/${movieId}?api_key=${apiKey}&append_to_response=release_dates,videos,images,reviews,credits,recommendations,keywords`
  // TODO: recommendations has 2 pages...
}

function getProvidersUrl(movieId) {
  // MUST ATTRIBUTE SOURCE TO "JustWatch" in order to use this data
  // theres a logo on https://www.themoviedb.org/movie/343611-jack-reacher-never-go-back/watch?locale=GB you can use
  return `${apiUrl}/movie/${movieId}/watch/providers?api_key=${apiKey}`
}

export { getUrl, getSearchUrl, getDetailsUrl, getProvidersUrl }
