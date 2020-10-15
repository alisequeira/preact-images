import {h} from 'preact';
import ImageCard from './imageCard';

const ImageList = (props) => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div class='grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8'>{images}</div>
}

export default ImageList;