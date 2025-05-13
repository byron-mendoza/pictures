import { useState } from "react"
import SearchBar from "./components/searchBar"
import ImageList from "./components/ImageList"
import searchImage from "./api"

function App() {
  //searchImages('cars')
  const [images, setImages] = useState ([])
  
  const handleSubmit = async(term) => {
    console.log('usted esta buscando con: ', term)
    const result = await searchImage(term)
    setImages(result)
  }
  return (
  <>
  <h1>Pictures App</h1>
    <SearchBar onsubmit={handleSubmit}/>
    <ImageList images={images}/>
    </>
  )
}

export default App
