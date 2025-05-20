
import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=3widjQE_3QPbkiZ3OQwyEPxht47w5ddJ0BKeiwA7Gp8'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages

