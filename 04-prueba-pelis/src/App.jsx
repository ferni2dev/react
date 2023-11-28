import { useState } from 'react'
import './App.css'

import { useEffect } from 'react'
import { useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState(null)
  const { foundMovies } = useMovies({ setMovies })

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    foundMovies({ search })
  }

  return (
    <div className='page'>
      <h1>Buscador de películas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
