import React, { useState } from 'react';
import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import googleClone from '../ClasesGrabadas/clon-google.mp4';
import clonePng from '../ClasesGrabadas/clonGoogle.png';

import styles from './VideoPage.module.css';

const videosData = [
  { id: 1, title: "Clase 1: Clon de Google con HTML y CSS", url: googleClone, thumbnail: clonePng, description: "En esta clase, aprenderemos los conceptos básicos de HTML." },
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
