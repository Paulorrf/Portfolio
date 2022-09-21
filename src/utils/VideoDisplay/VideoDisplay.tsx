import React from "react";

import { VideoBox, VideoTag } from "./VideoDisplay.style";

interface VideoProps {
  video: any;
  children?: JSX.Element;
  size?: String;
}

const VideoDisplay = ({ video, children, size = "500" }: VideoProps) => {
  return (
    <VideoBox>
      <VideoTag autoPlay loop muted size={size}>
        <source src={video} type="video/mp4" />
      </VideoTag>
      {children}
    </VideoBox>
  );
};

export default VideoDisplay;
