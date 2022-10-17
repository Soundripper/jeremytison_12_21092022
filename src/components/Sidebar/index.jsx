import { default as Yoga } from '../../assets/Yoga.svg';
import { default as Swimming } from '../../assets/Swimming.svg';
import { default as Bicycle } from '../../assets/Bicycle.svg';
import { default as Dumbbell } from '../../assets/Dumbbell.svg';

/**
 * 
 * @returns Left sidebar
 */
const Sidebar = () => {
    return(
    <div className='sideBar'>
        <div className='sidebarIconsContainer'>
            <div><img src={Yoga} alt="" /></div>
            <div><img src={Swimming} alt="" /></div>
            <div><img src={Bicycle} alt="" /></div>
            <div><img src={Dumbbell} alt="" /></div>
        </div> 
        <div className='copyright'>Copyright, SportSee 2020</div>
    </div>
    
    )
    
}

export default Sidebar