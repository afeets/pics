import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: '10px'}}>
//       <SearchBar />
//     </div>
//   );
// };

class App extends React.Component  {
  state = { images: [] };

  onSearchSubmit(term){
    // ajax async request to api 1st arg root url and endpoint search/photos
    // 2nd argument configure request. Returns a promise(tap on shoulder)
    // run .then function running an arrow function
    axios.get('https://api.unsplash.com/photos/?client_id=4pcWvsVj29s8L97mSsV0XpMExWyXTpXEXBIpQYn7rZo',{
      params: { query: term }
    })
    .then(response => {
      this.setState({images: response.data});
    });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
