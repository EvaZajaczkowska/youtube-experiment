// React imports
import React from "react";

// General imports
import API from "./configs/youtube";

// Styles
import "./App.css";

// Components Imports
import Search from "./components/Search";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  searchVideo = async term => {
    const response = await API.get("/search", {
      params: {
        q: term,
      }
    });

    this.setState({
      videos: response.data.items
    });
  };

  handleVideoSelect = selectedVideo => this.setState({ selectedVideo });

  render() {
    const { videos, selectedVideo } = this.state;
    
    return (
      <div className="App">
        <Search searchVideo={this.searchVideo} />
        <div>
          <VideoList
            videos={videos}
            onVideoSelect={this.handleVideoSelect}
          />
          <VideoDetail selectedVideo={selectedVideo} />
        </div>
      </div>
    );
  }
}

export default App;
