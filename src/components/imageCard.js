import {h, Component} from 'preact';


class ImageCard extends Component{
    constructor(props){
        super(props);

        this.state = {spans: 0};
      
    }

    render() {
        const {description, urls} = this.props.image;

        return(
            <div>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;