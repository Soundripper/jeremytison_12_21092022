

const KeyDataBlock = ({keyImg, calorieCount}) => {
    return (
        <div className='keyDataBlock'>
            <div className='iconKeyData'>
                <img src={keyImg} alt="" />
            </div>
            <div className='keyDataCountAndName'>
                <div className='keyDataCount'><h4>{calorieCount}kCal</h4></div>
                <div className='keyDataName'><h6>Calories</h6></div>    
            </div>
        </div>
    )
}

export default KeyDataBlock;