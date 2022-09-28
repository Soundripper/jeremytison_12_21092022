import { useEffect } from 'react';
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
import {dataGetUser, dataGetActivity, dataGetSessions, dataGetPerformance} from '../../services/dataGet.jsx';

const Profile = () => {
    // const {hasError, isLoading, dataActivity, dataUser, dataSessions, dataPerformance} = useAxios();
    const mock = true;
    const id = 12;
    const dataActivity = dataGetActivity(mock, id);
    const dataUser = dataGetUser(mock, id);
    const dataSessions = dataGetSessions(mock, id);
    const dataPerformance = dataGetPerformance(mock, id);

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
                        <KeyDataBlock keyImg={Calories} calorieCount={dataUser.keyData.calorieCount}/>
                        <KeyDataBlock keyImg={Protein} calorieCount={dataUser.keyData.proteinCount}/>
                        <KeyDataBlock keyImg={Carbs} calorieCount={dataUser.keyData.carbohydrateCount}/>
                        <KeyDataBlock keyImg={Fat} calorieCount={dataUser.keyData.lipidCount}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile