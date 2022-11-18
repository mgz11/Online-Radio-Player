import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

let lastVolume = 0;  // Value of last volume played, default 0

const Controls = ({ playPauseImage, playPause, buttonClass, playPauseStream, streamAudio }) => {
    const [volume, setVolume] = useState(0.2);
    const [volumeImg, setVolumeImg] = useState(faVolumeHigh);
    const [volumeClass, setVolumeClass] = useState('volumeOn');

    const toggleVolume = () => {
        if (volumeClass === 'volumeOn') {
            setVolumeImg(faVolumeMute);
            lastVolume = volume;
            setVolume(0);
            setVolumeClass('volumeOff')
        }
        else if (volumeClass === 'volumeOff') {
            setVolumeImg(faVolumeHigh);
            setVolume(lastVolume);
            setVolumeClass('volumeOn');
        }
    }

    return (
        <div className='audioControl'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={playPause}
                className={buttonClass}
            >
                <FontAwesomeIcon icon={playPauseImage} />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleVolume}
                className={volumeClass}
            >
                <FontAwesomeIcon icon={volumeImg} />
            </motion.div>
            <div className='volumeSlider'>
                <input 
                    type='range'
                    className='rangeSlider'
                    min={0}
                    max={1}
                    value={volume}
                    step={0.01}
                    onChange={(event) => {
                        setVolume(event.target.valueAsNumber);
                    }}
                />
            </div>
            <ReactPlayer 
                className="audioPlayer"
                playing={playPauseStream}
                volume={volume}
                url={streamAudio}
                />
        </div>
    )
};

export default Controls;