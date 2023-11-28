const API_KEY = 'efb6078c'
const API_ENDPOINT = 'https://www.omdbapi.com/'

export async function getMovies({ search }) {
  try {
    const response = await fetch(`${API_ENDPOINT}?apiKey=${API_KEY}&s=${search}`)
    const json = await response.json()
    const movies = json.Search
    return movies
  } catch (error) {
    throw new Error('Error consultando películas en la API')
  }
}