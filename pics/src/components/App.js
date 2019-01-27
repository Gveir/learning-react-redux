import React from "react";
import axios from "axios";

// const unsplashCredentials = {
//   clientId: "Access Key from unsplash.com dev app here"
// };
import unsplashCredentials from "../unsplashCredentials";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${unsplashCredentials.clientId}`
      },
      params: {
        query: term,
        per_page: 20
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
