import { useEffect, useState } from 'react';
import './index.scss'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ActivityGraph from '../../components/Graphs/ActivityGraph';
import PerformanceGraph from '../../components/Graphs/PerformanceGraph';
import ScoreGraph from '../../components/Graphs/ScoreGraph/ScoreGraph';
import SessionGraph from '../../components/Graphs/SessionGraph/SessionGraph';
import KeyDataBlock from '../../components/KeyDataBlock';
import { default as Calories } from '../../assets/Calories.svg';
import { default as Protein } from '../../assets/Protein.svg';
import { default as Carbs } from '../../assets/Carbs.svg';
import { default as Fat } from '../../assets/Fat.svg';
import { useParams } from 'react-router-dom';
import {dataGetUser, dataGetActivity, dataGetSessions, dataGetPerformance} from '../../services/dataGet.jsx';
// import PropTypes from "prop-types";

const Profile = () => {
    const mock = true;
    const {id} = useParams();
    
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState();
    const [dataSessions, setDataSessions] = useState();
    const [dataPerformance, setDataPerformance] = useState();
    const [dataActivity, setDataActivity] = useState(); 

    useEffect(() => {
            setDataUser(dataGetUser(mock, Number(id)));
            setDataSessions(dataGetSessions(mock, Number(id)));
            setDataPerformance(dataGetPerformance(mock, Number(id)));
            setDataActivity(dataGetActivity(mock, Number(id)));
            setLoading(false);
    }, []);

    console.log(dataUser);
    
    if (isLoading) {
        return <div >Loading...</div>;
    }

    return (
        <>  
            <Header />
            <Sidebar />
            <div className='dashBoardContainer'>
                <div className='welcome'>
                    <h2>Bonjour&nbsp;</h2>
                    <h2 className='firstName'>{dataUser.userInfos.firstName}</h2>
                </div>
                <div><h5>Félicitation ! Vous avez explosé vos objectifs hier 👏</h5></div>
                <div className='dataContainer'>
                    <div className='graphsMainContainer'>
                        <ActivityGraph dataActivity={dataActivity.sessions} />
                        <div className='sessionsPerfsScoreContainer'>
                            <SessionGraph dataSessions={dataSessions} />
                            <PerformanceGraph dataPerformance={dataPerformance} />
                            <ScoreGraph score={dataUser.score} />
                        </div>
                    </div>
                    <div className='keyDataContainer'>
                        <KeyDataBlock keyImg={Calories} count={dataUser.keyData.calorieCount} type="Calories" mesure ="kCal"/>
                        <KeyDataBlock keyImg={Protein} count={dataUser.keyData.proteinCount} type="Protéines" mesure ="g"/>
                        <KeyDataBlock keyImg={Carbs} count={dataUser.keyData.carbohydrateCount} type="Glucides" mesure ="g"/>
                        <KeyDataBlock keyImg={Fat} count={dataUser.keyData.lipidCount} type="Lipides" mesure ="g"/>
                    </div>
                </div>
            </div>
        </>
    );
}

// Profile.propTypes = {
//     mock: PropTypes.number,
// }

export default Profile