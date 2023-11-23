import { useState, useEffect } from 'react'

export function useRandomTag({ allTags }) {
  const [tag, setTag] = useState()
  const setRandomTag = () => {
    if (!allTags) return
    const randomTag = allTags[Math.floor(Math.random() * allTags.length)]
    setTag(randomTag)
  }
  useEffect((setRandomTag), [allTags])

  return { tag, setRandomTag }
}