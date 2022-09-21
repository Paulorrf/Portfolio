import React from "react";
import { VideoContainer, VideoBox, VideoTag, GitLink } from "./Projetos.style";

import Countries_Gif from "../../assets/countries_gif.mp4";
import TodoApp_Gif from "../../assets/todoApp_gif.mp4";
import SpaceTourism_Gif from "../../assets/spaceTourism_gif.mp4";
import CrowdFund_Gif from "../../assets/crowdfund_gif.mp4";

function createVideo(Video: any, url: string): JSX.Element {
  return (
    <VideoBox>
      <VideoTag autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </VideoTag>
      <GitLink
        href={`https://github.com/Paulorrf/${url}`}
        target="_blank"
        rel="noreferrer"
      >
        Github
      </GitLink>
    </VideoBox>
  );
}

const Projetos = () => {
  const videos = [
    [Countries_Gif, "countries"],
    [TodoApp_Gif, "Todo-App"],
    [SpaceTourism_Gif, "Space-Tourism"],
    [CrowdFund_Gif, "Crowdfunding"],
  ];

  return (
    <VideoContainer>
      {videos.map((video) => {
        return <div>{createVideo(video[0], video[1])}</div>;
      })}
    </VideoContainer>
  );
};

export default Projetos;
