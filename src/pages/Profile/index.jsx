import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import KeyDataBlock from '../../components/KeyDataBlock';
import { default as Calories } from '../../assets/Calories.svg';
import { default as Protein } from '../../assets/Protein.svg';
import { default as Carbs } from '../../assets/Carbs.svg';
import { default as Fat } from '../../assets/Fat.svg';
// import useAxios from '../../services/useAxios';
import { RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer} from 'recharts';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../mocks/mocked_data';

const dataEx = [
    {
        name: 'Score',
        uv: 0.5,
        pv: 2400,
    },
    {
        uv: 1,
        fill: '#FFFFFF'
    },
]

const styleRadial = {
    top: '10%', 
    // right: 0,
    transform: 'translate(0, -50%)',
    // lineHeight: '24px',
    };

const Profile = () => {
    // useAxios();
    // console.log(USER_MAIN_DATA);
    const currentUserMainData = USER_MAIN_DATA.filter((el) => el.id === 12);
    const currentUserActivity = USER_ACTIVITY.filter((el) => el.userId === 12);
    const currentUserAverageSessions = USER_AVERAGE_SESSIONS.filter((el) => el.userId === 12);
    const currentUserPerformance = USER_PERFORMANCE.filter((el) => el.userId === 12);
    // console.log(currentUserMainData[0]);

    return (
        <>  
            <Header />
            <Sidebar />
            <div className='dashBoardContainer'>
                <div className='welcome'>
                    <h2>Bonjour&nbsp;</h2>
                    <h2 className='firstName'>{currentUserMainData[0].userInfos.firstName}</h2>
                </div>
                <div>
                    <h5>Félicitation ! Vous avez explosé vos objectifs hier 👏</h5>
                </div>
                <div className='dataContainer'>
                    <div className='graphsMainContainer'>
                        <div className='activityGraph'>
                            <ResponsiveContainer width="100%" aspect={4}>
                                <BarChart
                                barGap={15}
                                width={500}
                                height={300}
                                data={currentUserActivity[0].sessions}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                {/* <Legend /> */}
                                <Bar dataKey="kilogram" fill="#282D30" barSize={8} radius={[5, 5, 0, 0]}/>
                                <Bar dataKey="calories" fill="#E60000" barSize={8} radius={[5, 5, 0, 0]}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='sessionsPerfsScoreContainer'>
                                <ResponsiveContainer className='sessionGraph' width="28%" aspect={1}>
                                    <LineChart width={100} height={100} data={currentUserAverageSessions[0].sessions}>
                                    <Tooltip />
                                    <XAxis dataKey="day" />
                                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                                <ResponsiveContainer className='performanceGraph' width="28%" aspect={1}>
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={currentUserPerformance[0].data}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="kind" stroke="#FFFFFF"/>
                                    <PolarRadiusAxis />
                                    <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                                    </RadarChart>
                                </ResponsiveContainer>
                                <ResponsiveContainer className='scoreGraph' width="28%" aspect={1}>
                                    <RadialBarChart cx="50%" cy="50%" innerRadius="75%" outerRadius="100%" barSize={10} data={dataEx} startAngle={180} endAngle={-180}>
                                        <RadialBar
                                            minAngle={15}
                                            // label={{ position: 'center', fill: '#000' }}
                                            // background
                                            dataKey="uv"
                                            fill= '#FF0101'
                                        />
                                        <Legend fill='#8884d8' iconSize={0} layout="horizontal" align="left" verticalAlign="top" wrapperStyle={styleRadial} />
                                    </RadialBarChart>
                                </ResponsiveContainer>
                                
                        </div>
                    </div>
                    <div className='keyDataContainer'>
                        <KeyDataBlock keyImg={Calories} calorieCount={currentUserMainData[0].keyData.calorieCount}/>
                        <KeyDataBlock keyImg={Protein} calorieCount={currentUserMainData[0].keyData.proteinCount}/>
                        <KeyDataBlock keyImg={Carbs} calorieCount={currentUserMainData[0].keyData.carbohydrateCount}/>
                        <KeyDataBlock keyImg={Fat} calorieCount={currentUserMainData[0].keyData.lipidCount}/>
                    </div>
                </div>
                
                
            </div>
            
            
        </>
    );
}

export default Profile