import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = "https://cataas.com/api/tags?json=true"
const CAT_PREFIX_IMAGE_URL = "https://cataas.com/cat/"

function App() {
  const [allTags, setAllTags] = useState()
  const [tag, setTag] = useState()
  const [image, setImage] = useState()

  const setRandomTag = () => {
    if (!allTags) return
    const randomTag = allTags[Math.floor(Math.random() * allTags.length)]
    setTag(randomTag)
  }

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setAllTags(data))
  }, [])

  useEffect(setRandomTag, [allTags])

  useEffect(() => {
    setImage(CAT_PREFIX_IMAGE_URL + tag)
  }, [tag])

  return (
    <main>
      {tag && <section>Random tag: {tag}</section>}
      <button onClick={setRandomTag}>Cambiar tag</button>
      {image && <section><img src={`${image}`}></img></section>}
    </main>
  )
}

export default App
