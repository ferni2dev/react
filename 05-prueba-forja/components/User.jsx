/* eslint-disable react/prop-types */
export function User({ usuario }) {
  return (
    <>
      <h5>{usuario.nombre}</h5>
      <p>{usuario.username}</p>
      <p>{usuario.entrenador}</p>
    </>
  )
}