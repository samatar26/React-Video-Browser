import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

//Free Api Key and restricted
const API_KEY = 'AIzaSyAUD5jiHkVOCBRTl-UDPNhAUbG_GTUHwts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');
  }

  onVideoSelect = selectedVideo => this.setState({ selectedVideo });

  videoSearch = term => {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  };

  render() {
    //throttling - our function can only be called once every 300 miliseconds
    const videoSearch = _.debounce(this.videoSearch, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />

        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
