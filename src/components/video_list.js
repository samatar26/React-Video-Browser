import React from 'react';
import VideoListItem from './video_list_item';
import uuid from 'uuid/v4';

const VideoList = ({ videos }) => {
  return (
    <ul className="col-md-4 list-group">
      {videos.map(video => {
        return <VideoListItem video={video} key={uuid()} />;
      })}
    </ul>
  );
};

export default VideoList;
