
import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { UseMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'


function App() {

  const { movies } = UseMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new FormData(event.target))
    console.log(query)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setSearch(newQuery)

  }



  return (
    <div className='page'>
      <h1>Buscador de películas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' name='query' value={search}></input>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </header>
      <main>
        <ul className='movies'>
          <Movies movies={movies} />
        </ul>
      </main>
    </div>
  )
}

export default App
