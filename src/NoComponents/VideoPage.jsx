// src/pages/VideoPage.jsx
import React, { useState } from 'react';

import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import googleClone from '../ClasesGrabadas/clon-google.mp4'
import clonePng from '../ClasesGrabadas/clonGoogle.png'
import styles from './VideoPage.module.css'


const videosData = [
  { id: 1, title: "Clase 1: Introducción a HTML", url: 'googleClone' , thumbnail: {clonePng}, description: "En esta clase, aprenderemos los conceptos básicos de HTML." },
  //{ id: 2, title: "Clase 2: CSS Básico", url: "/videos/clase2.mp4", thumbnail: "/thumbnails/clase2.png", description: "En esta clase, aprenderemos los fundamentos de CSS." },
  // Más videos...
];

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <main className={styles.mainContainer}>
        <VideoList videos={videosData} onVideoSelect={setSelectedVideo} />
        <VideoPlayer selectedVideo={selectedVideo} />
      </main>
    </div>
  );
};

export default VideoPage;
