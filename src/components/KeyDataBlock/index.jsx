import PropTypes from "prop-types";

/**
 * 
 * @param {Object} KeyDataBlock 
 * @param {url} KeyDataBlock.keyImg Url of source image
 * @param {number} KeyDataBlock.count Intake count 
 * @param {string} KeyDataBlock.mesure Unit (kCal or grams)
 * @param {string} KeyDataBlock.type Intake type
 * @returns Block displaying intakes
 */

/**
 * Returns the blocks (intakes)
 */
const KeyDataBlock = ({keyImg, count, type, mesure}) => {
    return (
        <div className='keyDataBlock'>
            <div className='iconKeyData'>
                <img src={keyImg} alt="" />
            </div>
            <div className='keyDataCountAndName'>
                <div className='keyDataCount'><h4>{count}{mesure}</h4></div>
                <div className='keyDataName'><h6>{type}</h6></div>    
            </div>
        </div>
    )
}

KeyDataBlock.propTypes = {
    keyImg: PropTypes.string,
    count: PropTypes.number,
    type: PropTypes.string,
    mesure: PropTypes.string,
}

export default KeyDataBlock;