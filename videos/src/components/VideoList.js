import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoItems = videos.map(video => {
    return <VideoItem key={video.id} video={video} />;
  });

  return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;
