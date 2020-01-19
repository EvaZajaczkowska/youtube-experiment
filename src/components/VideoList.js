// React imports
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos, onVideoSelect } = props;
  const videoItems = videos.map(video => 
    (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    )
  );
  return <div className="videoList"><ul>{videoItems}</ul></div>;
};

export default VideoList;
