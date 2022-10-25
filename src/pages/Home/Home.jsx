import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>  
            {/* <Header />
            <Sidebar /> */}
            <div className='dashBoardContainer'>
                <div className='usersLinksContainer'>
                    <Link to="/user/12" className='userLink'>Karl</Link>
                    <Link to="/user/18" className='userLink'>Cecilia</Link>
                </div>
            </div>
        </>
    );
}

export default Home