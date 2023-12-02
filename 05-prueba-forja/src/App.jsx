import './App.css'
import { LoginForm } from '../components/loginForm'
import { useState } from 'react'
import { User } from '../components/User'

function App() {
  const [usuario, setUsuario] = useState(null)
  const [error, setError] = useState(null)

  return (
    <div className='contenedorLogin'>
      <h1>Inicia sesión en la app</h1>
      {!usuario && <LoginForm setUsuario={setUsuario} setError={setError} />}
      {usuario && <User usuario={usuario} />}
      {usuario && <p>Usuario {usuario.nombre} logeado con éxito</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default App
