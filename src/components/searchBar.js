import {h, render, Component} from 'preact';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''}
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div class='pt-2 relative mx-auto text-gray-600 flex justify-center'>
                <form onSubmit={this.onFormSubmit}>
                    <label class='mx-2'>Image Search</label>
                    <input
                        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type='text'
                        value = {this.state.term}
                        onChange={e => this.setState({term: e.target.value})}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;