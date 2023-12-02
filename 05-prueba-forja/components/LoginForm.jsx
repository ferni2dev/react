/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export function LoginForm({ setUsuario, setError }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { getUsuario } = useLogin({ setUsuario, setError })

  const handleSubmit = (event) => {
    event.preventDefault()
    /* const formData = new FormData(event.target) */
    getUsuario({ username, password })
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Usuario</label>
      <input type="text" name="username" placeholder="Ej: ferni2" value={username} onChange={handleUsername}></input>
      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" value={password} onChange={handlePassword}></input>
      <button type="submit">Iniciar sesión</button>
    </form>
  )
}