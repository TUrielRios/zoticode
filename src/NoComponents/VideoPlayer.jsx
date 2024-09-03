// src/components/VideoPlayer.jsx
import styles from './VideoPlayer.module.css';
import googleClone from '../ClasesGrabadas/clon-google.mp4'
import clonePng from '../ClasesGrabadas/clonGoogle.png'

const VideoPlayer = ({ selectedVideo }) => {
  return (
    <div className={styles.videoPlayer}>
      {selectedVideo ? (
        <div>
          <h2>{selectedVideo.title}</h2>
          <video controls src={googleClone} className={styles.video} />
          <p>{selectedVideo.description}</p>
        </div>
      ) : (
        <p>Selecciona un video para ver</p>
      )}
    </div>
  );
};

export default VideoPlayer;
