const ENDPOINT = "https://entrenamientosimple.com/rest/pruebas-react/login.php";

export const loginService = async ({ username, password }) => {
  console.log(JSON.stringify({ username, password }))
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }) // body data type must match "Content-Type" header
    }
    const response = await fetch(`${ENDPOINT}`, options)

    const usuario = await response.json()
    return usuario
  } catch (e) {
    throw new Error(e)
  }
}