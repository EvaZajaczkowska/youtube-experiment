// React imports
import React from "react";

const VideoDetail = (props) => {
  const { selectedVideo } = props;

  if (selectedVideo === null) {
    return <div className="videoDetail" />;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div className="videoDetail">
      <div className="videoFrame">
        <iframe title="Video player" width="640" height="480" src={videoSrc} />
      </div>
      <div className="videoTitle">{selectedVideo.snippet.title}</div>
      <div className="videoDescription">{selectedVideo.snippet.description}</div>
    </div>
  );
};

export default VideoDetail;
