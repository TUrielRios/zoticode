// src/components/VideoList.jsx
import styles from './VideoList.module.css';
import googleClone from '../ClasesGrabadas/clon-google.mp4'
import clonePng from '../ClasesGrabadas/clonGoogle.png'

const videosData = [
  { id: 1, title: "Clase 1: Clon de Google con HTML y CSS", url: {googleClone} , thumbnail: {clonePng}, description: "En esta clase, aprenderemos los conceptos básicos de HTML." },
  //{ id: 2, title: "Clase 2: CSS Básico", url: "/videos/clase2.mp4", thumbnail: "/thumbnails/clase2.png", description: "En esta clase, aprenderemos los fundamentos de CSS." },
  // Más videos...
];

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className={styles.videoList}>
      {videosData.map((video) => (
        <div key={video.id} className={styles.videoItem} onClick={() => onVideoSelect(video)}>  
          <h1 className={styles.title}>{video.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default VideoList;