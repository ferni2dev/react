export function Movies({ movies }) {
  return (
    <ul className='movies'>
      {
        movies ? movies.map(movie => (
          <li className='movie' key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))
          : <p>Sin películas</p>
      }
    </ul>
  )
}