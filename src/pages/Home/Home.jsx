import './Home.scss'
import { Link } from 'react-router-dom'
import { USER_MAIN_DATA } from '../../mocks/mocked_data';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {dataGetUser} from '../../services/dataGet.jsx';
import { formatScore } from '../../services/dataModeling';


const Home = () => {
    const [dataUser, setDataUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const mock = true;

    useEffect(() => {
        const dataGetUserHome = async () => {
            if (mock){
                return USER_MAIN_DATA
            }
            else{
                const response = await axios.get(`http://localhost:3000/USER_MAIN_DATA`)
                console.log(response.data.data);
                return (await response.data.data);
            }  
        }

        const fetchDatas = async () => {
            setDataUser(await dataGetUserHome());
            setIsLoading(false);
            console.log(dataUser);
        }
        fetchDatas()
        
    }, []);

    /**
         * Returns loading div if data is loading
         */
    if (isLoading) {
        return <div >Loading...</div>;
    }


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