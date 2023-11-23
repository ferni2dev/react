import { useState, useEffect } from 'react'
import { getAllTags } from '../services/allTags.js'


export function useAllTags() {
  const [allTags, setAllTags] = useState()

  useEffect(() => {
    getAllTags().then((tags) => {
      setAllTags(tags)
    })
  }, [])

  return { allTags }
}