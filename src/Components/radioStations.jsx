import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';



const RadioStations = ({Lofi, Anime, CafeJazz, Ambient, Piano,
                        CafeLofi, VGLofi, Calm }) => {
    return (
        <div className="radioStationsList">
            <motion.div animate={{opacity: [0, 1]}} transition={{ delay: 1}}>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={Ambient}
                    className='station'>
                        <FontAwesomeIcon className='stationIcon' icon={faCaretRight} />
                        Amibent Lofi
                </motion.div>
            </motion.div>

            <motion.div animate={{opacity: [0, 1]}} transition={{ delay: 1}}>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={Anime}
                    className='station'>
                        <FontAwesomeIcon className='stationIcon' icon={faCaretRight} />
                        Anime Lofi
                </motion.div>
            </motion.div>

            <motion.div animate={{opacity: [0, 1]}} transition={{ delay: 1}}>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={Piano}
                    className='station'>
                        <FontAwesomeIcon className='stationIcon' icon={faCaretRight} />
                        Anime Piano
                </motion.div>
            </motion.div>

            <motion.div animate={{opacity: [0, 1]}} transition={{ delay: 1}}>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={CafeJazz}
                    className='station'>
                        <FontAwesomeIcon className='stationIcon' icon={faCaretRight} />
                        Cafe Jazz
                </motion.div>
            </motion.div>

            <motion.div animate={{opacity: [0, 1]}} transition={{ delay: 1}}>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={CafeLofi}
                    className='station'>
                        <FontAwesomeIcon className='stationIcon' icon={faCaretRight} />
                        Cafe Lofi
                </motion.div>
            </motion.div>

            <motion.div animate={{opacity: [0, 1]}} transition={{ delay: 1}}>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={Calm}
                    className='station'>
                        <FontAwesomeIcon className='stationIcon' icon={faCaretRight} />
                        Calm Piano
                </motion.div>
            </motion.div>

            <motion.div animate={{opacity: [0, 1]}} transition={{ delay: 1}}>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={Lofi}
                    className='station'>
                        <FontAwesomeIcon className='stationIcon' icon={faCaretRight} />
                        Lofi Girl
                </motion.div>
            </motion.div>

            <motion.div animate={{opacity: [0, 1]}} transition={{ delay: 1}}>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={VGLofi}
                    className='station'>
                        <FontAwesomeIcon className='stationIcon' icon={faCaretRight} />
                        Video Game Lofi
                </motion.div>
            </motion.div>

            <motion.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.85 }}
                  className='githubIcon'>
              <a href='https://github.com/mgz11' target='_blank' rel='noreferrer'><FontAwesomeIcon className='socialIcon'icon={faGithub} /></a>
            </motion.div>

        </div>
    );
};

export default RadioStations;