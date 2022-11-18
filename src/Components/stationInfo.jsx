import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const StationInfo = ({stationName, link}) => {
    return (
        <div className="stationInfo" key={stationName}>
            {stationName}
            <motion.div
             whileHover={{ scale: 1.15}}
             whileTap={{ scale: 0.85 }}>
                <a href={link} target='_blank' rel='noreferrer'><FontAwesomeIcon className='socialIcon'icon={faYoutube} /></a>
            </motion.div>
        </div>
    )
};

export default StationInfo;