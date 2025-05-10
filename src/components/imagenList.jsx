import imagenShow from "./imageShow"
import './imagenList.css'

const ImageList = ({images}) => {
    const renderImage = images.map((image) =>{
        return <imageShow key={image.id} image={image}/>   
        })
        return (
            <div className="image-list">
            {renderImage}
            </div>
        )   
}