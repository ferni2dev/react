import { CAT_ENDPOINT_RANDOM_FACT } from "../constantes"

export const getAllTags = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  return data
}