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

export default KeyDataBlock;