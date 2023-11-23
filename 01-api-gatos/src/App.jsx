import './App.css'
import { Tag } from './components/Tag'
import { useAllTags } from './hooks/useAllTags'
import { useCatImage } from './hooks/useCatImage'
import { useRandomTag } from './hooks/useRandomTag'

function App() {
  const { allTags } = useAllTags()
  const { tag, setRandomTag } = useRandomTag({ allTags })
  const { imgURL } = useCatImage({ tag })

  return (
    <>
      <h1>App de gatos</h1>
      {allTags && <p>First tag: {allTags[1]}</p>}
      <Tag tag={tag}></Tag>
      {/* {tag && <p>{tag}</p>} */}
      <button onClick={setRandomTag}>Cambiar tag</button>
      <br></br>
      {imgURL && <img src={`${imgURL}`}></img>}
    </>
  )
}

export default App
