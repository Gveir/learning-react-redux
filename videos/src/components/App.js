import React from "react";

import youtube from "../api/youtube";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onTermSubmit = async term => {
    let result = await youtube.get("/search", { params: { q: term } });

    console.log(result);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
