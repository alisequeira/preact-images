import { h, render, Component } from 'preact';
import unplash from '../api/unsplash';
import SearhBar from './searchBar';
import ImageList from './imageList';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {images: []}
	}

	onSearchSubmit = async(term) => {
		const response = await unplash.get('/search/photos', {params:{query: term}});
			this.setState({images: response.data.results});
	}
	render(){
		return (
			<div>
				<SearhBar onSubmit={this.onSearchSubmit}/>
				<ImageList images = {this.state.images}/>
			</div>
		)
	}
}


export default App;
