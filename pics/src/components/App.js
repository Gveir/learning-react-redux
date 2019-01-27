import React from "react";
import axios from "axios";

// const unsplashCredentials = {
//   clientId: "Access Key from unsplash.com dev app here"
// };
import unsplashCredentials from "../unsplashCredentials";

import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${unsplashCredentials.clientId}`
      },
      params: {
        query: term,
        per_page: 20
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
