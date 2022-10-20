import { default as Logo } from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

/**
 * 
 * @returns header with logo and links
 */
const Header = () => {
    return (
    <div className='headerContainer'>
        <Link to="/"><img className='logo' src={Logo} alt="" /></Link>
            
            <div className='linksContainer'>
                <Link className='headerLink'>Accueil</Link>
                <Link className='headerLink'>Profil</Link>
                <Link className='headerLink'>Réglage</Link>
                <Link className='headerLink'>Communauté</Link>
            </div>
    </div>
    )
   
}

export default Header