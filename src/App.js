import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import Controls from './Components/audioControls';
import Clock from './Components/clock';
import RadioStations from './Components/radioStations';
import StationInfo from './Components/stationInfo';
import './Styles/content.css';
import './Styles/reset.css';
import './Styles/video.css';


function App() {
  const [stations, setStations] = useState('Lofi Girl');
  
  const [channelLink, setChannelLink] = useState(null); 
  const [stream, setStream] = useState("`//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1`");
  const [playStream, setPlayStream] = useState(false);

  const [playPauseImage, setPlayPauseImage] = useState(faCirclePlay);
  const [playPauseClass, setPlayPauseClass] = useState('play');
  
  const togglePlayPause = () => {
    if (playPauseClass === 'play') {
      setPlayPauseImage(faCirclePause);
      setPlayPauseClass('pause');
      startStream();
    }
    else if (playPauseClass ==='pause') {
      setPlayPauseImage(faCirclePlay);
      setPlayPauseClass('play');
      pauseStream();
    }
  }

  const startStream = () => {
    setPlayStream(true);
  }

  const pauseStream = () => {
    setPlayStream(false);
  }

  const AmbientLofi = () => {
    setStations('Ambient Lofi');
    setStream("https://www.youtube.com/watch?v=m3lU2V_51rc");
    setChannelLink("https://www.youtube.com/c/AmbientWorlds");
    startStream();
    setPlayPauseImage(faCirclePause);
    setPlayPauseClass('pause');
  };

  const AnimeLofi = () => {
    setStations('Anime Lofi');
    setStream("https://www.youtube.com/watch?v=GNWLILeztaI");
    setChannelLink("https://www.youtube.com/c/LlamaLoops");
    startStream();
    setPlayPauseImage(faCirclePause);
    setPlayPauseClass('pause');
  };

  const CafeJazz = () => {
    setStations('Cafe Jazz');
    setStream("https://www.youtube.com/watch?v=6uddGul0oAc");
    setChannelLink("https://www.youtube.com/channel/UCJhjE7wbdYAae1G25m0tHAA");
    startStream();
    setPlayPauseImage(faCirclePause);
    setPlayPauseClass('pause');
  };

  const CafeLofi = () => {
    setStations('Cafe Lofi');
    setStream("https://www.youtube.com/watch?v=-5KAN9_CzSA");
    setChannelLink("https://www.youtube.com/c/steezyasfvck");
    startStream();
    setPlayPauseImage(faCirclePause);
    setPlayPauseClass('pause');
  };

  const CalmPiano = () => {
    setStations('Calm Piano');
    setStream("https://www.youtube.com/watch?v=xWRHTpqQMGM");
    setChannelLink("https://www.youtube.com/c/JackFrancisComposer");
    startStream();
    setPlayPauseImage(faCirclePause);
    setPlayPauseClass('pause');
  };
  
  const LofiGirl = () => {
    setStations('Lofi Girl');
    setStream("https://www.youtube.com/watch?v=jfKfPfyJRdk");
    setChannelLink("https://www.youtube.com/c/LofiGirl");
    startStream();
    setPlayPauseImage(faCirclePause);
    setPlayPauseClass('pause');
  };

  const PianoAnime = () => {
    setStations('Anime Piano');
    setStream("https://www.youtube.com/watch?v=HSOtku1j600");
    setChannelLink("https://www.youtube.com/c/BeautifulMusic");
    startStream();
    setPlayPauseImage(faCirclePause);
    setPlayPauseClass('pause');
  };

  const VGLofi = () => {
    setStations('Video Game Lofi');
    setStream("https://www.youtube.com/watch?v=QlP3eE9Vlg8");
    setChannelLink("https://www.youtube.com/channel/UCLMVehWkOvFlGMeIetyFIxg");
    startStream();
    setPlayPauseImage(faCirclePause);
    setPlayPauseClass('pause');
  };

  return (
    <div className="App">
      <div className='title-logo'>SereneSounds</div>
      <div className='contentContainer'>
        <div className='radioStationsContainer'>
          <RadioStations
            Ambient={AmbientLofi}
            Anime={AnimeLofi}
            CafeJazz={CafeJazz}
            CafeLofi={CafeLofi}
            Calm={CalmPiano}
            VGLofi={VGLofi}
            Lofi={LofiGirl}
            Piano={PianoAnime} />
        </div>
        <div className='outerVideoContainer'>
          <div className='videoContainer'>
              <Clock />
              <ReactPlayer
              className="videoScreen"
              width="100%"
              height="100%"
              playing={playStream}
              url={stream} 
              volume="mute"
              config={{
                youtube: {
                  playerVars: {
                    rel: 0,
                    iv_load_policy: 3,
                    loop: 1,
                    modestbranding: 1,
                    controls: 0
                  }
                }
              }}
              />
            </div>
            <StationInfo stationName={stations} link={channelLink}/>
            <Controls playPauseImage={playPauseImage} 
                  playPause={togglePlayPause} 
                  buttonClass={playPauseClass}
                  playPauseStream={playStream}
                  streamAudio={stream}  />
          </div>
        </div>
    </div>
  );
}

export default App;
