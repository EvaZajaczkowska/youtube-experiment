// React imports
import React from "react";

const VideoItem = (props) => {
  const { video, onVideoSelect } = props;

  const thumbnail = video.snippet.thumbnails.default;
  const thumbnailLink = thumbnail.url;
  const thumbnailWidth = thumbnail.width;
  const thumbnailHeight = thumbnail.height;

  return (
    <li
      className="videoItem"
      onClick={() => onVideoSelect(video)}
    >
      <div className="videoListThumbnail">
        <img
          alt={video.snippet.title}
          src={thumbnailLink}
          width={thumbnailWidth}
          height={thumbnailHeight}
        />
      </div>
      <div className="videoListTitle">{video.snippet.title}</div>
    </li>
  );
};

export default VideoItem;
