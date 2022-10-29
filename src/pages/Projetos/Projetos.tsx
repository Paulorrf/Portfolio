import React, { useState } from "react";
import { VideoContainer, GitLink } from "./Projetos.style";

import Modal from "../../components/Modal/Modal";

import Countries_Gif from "../../assets/countries_gif.mp4";
import TodoApp_Gif from "../../assets/todoApp_gif.mp4";
import SpaceTourism_Gif from "../../assets/spaceTourism_gif.mp4";
import CrowdFund_Gif from "../../assets/crowdfund_gif.mp4";
import Forum_Gif from "../../assets/forum_gif.mp4";
import MarvelApp_Gif from "../../assets/marvelApp_gif.mp4";

import VideoDisplay from "../../utils/VideoDisplay/VideoDisplay";

const Projetos = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<any>();

  const videos = [
    [MarvelApp_Gif, "marvel-app"],
    [Forum_Gif, "Forum-app"],
    [Countries_Gif, "Countries"],
    [TodoApp_Gif, "Todo-App"],
    [SpaceTourism_Gif, "Space-Tourism"],
    [CrowdFund_Gif, "Crowdfunding"],
  ];

  function handleModal(Video: any) {
    setShowModal(true);
    setCurrentVideo(Video);
  }

  function createVideo(Video: any, url: string): JSX.Element {
    return (
      <div onClick={() => handleModal(Video)}>
        <VideoDisplay video={Video}>
          <GitLink
            href={`https://github.com/Paulorrf/${url}`}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </GitLink>
        </VideoDisplay>
      </div>
    );
  }

  return (
    <div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currentVideo={currentVideo}
      />

      <VideoContainer>
        {videos.map((video, index) => {
          return <div key={index}>{createVideo(video[0], video[1])}</div>;
        })}
      </VideoContainer>
    </div>
  );
};

export default Projetos;
