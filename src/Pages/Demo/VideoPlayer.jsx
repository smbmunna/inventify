
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  
  const videoId = 'S4hR4BmHbMU';

  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {  
      autoplay: 1,
    },
  };

  
  const onReady = (event) => {  
    event.target.playVideo();
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;
