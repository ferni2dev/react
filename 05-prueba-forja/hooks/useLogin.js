import { useCallback } from "react"
import { loginService } from '../services/login'

export const useLogin = ({ setUsuario, setError }) => {


  const getUsuario = useCallback(async ({ username, password }) => {
    try {
      const res = await loginService({ username, password })
      setUsuario(res)
      setError(null)
    } catch (error) {
      setUsuario(null)
      setError(error.message)
    }
  }, [setUsuario, setError])

  return { getUsuario }
}