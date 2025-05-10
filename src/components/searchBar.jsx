import{useState} from "react"
import './searchBar.css'

const searchBar = ({onsubmit}) => {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) =>{
        event.preventDeafault()
        console.log("necesito decir al componenete papa sobre los datos  ")
    }

    const handleChange = (event) =>{
        setTerm(event.target.vale)
    }

    console.log('term', term)

    return( 
        <div className="search-bar">
        <form onsubmit= {handleFormSubmit}>
            <label>termino dela busqueda: </label>
            <input onChange={handleChange} value={term}/>
        </form>
        </div>

    )
}

export default searchBar
