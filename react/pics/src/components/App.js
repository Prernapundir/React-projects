import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { images: [] };
  async onSearchSubmit(term){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query : term },
      headers: {
        Authorization : 'Client-ID 0f3940ebc578306d20e271e0dfd7f9031628743ab2d94d9927c7d98c26f502b0'
      }
    });
    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop:"20px"}}>
      <SearchBar  onSubmit={this.onSearchSubmit} />
      Found: {this.state.images.length} images
      </div>
    );
  }
}


export default App;
