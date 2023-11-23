import { useState, useEffect } from 'react'
import { CAT_PREFIX_IMAGE_URL } from '../constantes'

export function useCatImage({ tag }) {
  const [imgURL, setImgURL] = useState()

  useEffect(() => {
    setImgURL(CAT_PREFIX_IMAGE_URL + tag)
  }, [tag])

  return { imgURL }
}