import { useEffect } from 'react';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import KeyDataBlock from '../../components/KeyDataBlock';
import { default as Calories } from '../../assets/Calories.svg';
import { default as Protein } from '../../assets/Protein.svg';
import { default as Carbs } from '../../assets/Carbs.svg';
import { default as Fat } from '../../assets/Fat.svg';
import { default as Dot_Red } from '../../assets/Dot_Red.svg';
import { default as Dot_Black } from '../../assets/Dot_Black.svg';
import useAxios from '../../services/useAxios';
import { Label, RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer} from 'recharts';
// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../mocks/mocked_data';
// const currentUserMainData = USER_MAIN_DATA.filter((el) => el.id === 12);
// const currentUserActivity = USER_ACTIVITY.filter((el) => el.userId === 12);
// const currentUserAverageSessions = USER_AVERAGE_SESSIONS.filter((el) => el.userId === 12);
// const currentUserPerformance = USER_PERFORMANCE.filter((el) => el.userId === 12);
// console.log(currentUserActivity[0].sessions[0].kilogram);
// console.log(dataActivity);



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

const CustomTooltipAcitivity = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        // payload[0].chartType = "AreaChart";
        return (
        <div className="custom-tooltip-activity">
            {/* <p className="label">{payload[0].value}</p> */}
            <p className="user-number">
                {payload[0].payload.kilogram}kg
            </p>
            <p className="user-number">
                {payload[0].payload.calories}kCal
            </p>
            {/* <p className="time">{label}</p> */}
        </div>
        );
    }
    return null;
};

const CustomTooltipSessions = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        // payload[0].chartType = "AreaChart";
        return (
        <div className="custom-tooltip-sessions">
            {/* <p className="label">{payload[0].value}</p> */}
            <p className="user-number">
                {payload[0].payload.sessionLength}min
            </p>
            {/* <p className="time">{label}</p> */}
        </div>
        );
    }
    return null;
};

const Profile = () => {
    const {hasError, isLoading, dataActivity, dataUser, dataSessions, dataPerformance} = useAxios();
    
    return (
        <>  
            <Header />
            <Sidebar />
            <div className='dashBoardContainer'>
            
                <div className='welcome'>
                    <h2>Bonjour&nbsp;</h2>
                    <h2 className='firstName'>{dataUser.userInfos.firstName}</h2>
                </div>
                <div>
                    <h5>Félicitation ! Vous avez explosé vos objectifs hier 👏</h5>
                </div>
                <div className='dataContainer'>
                    <div className='graphsMainContainer'>

                        <div className='activityGraph'>
                            <div className='activityGraph_titleContainer'>
                                <div className='activityGraph_title'><h6>Activité quotidienne</h6></div>
                                <div className='activityGraphLegend'>
                                    <div className='activityGraph_mesure'><img className='mesureDot' src={Dot_Black} alt="" /><h6>Poids (kg)</h6></div>
                                    <div className='activityGraph_mesure'><img className='mesureDot' src={Dot_Red} alt="" /><h6>Calories brûlées (kCal)</h6></div>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" aspect={4}>
                                <BarChart
                                barGap={15}
                                width={500}
                                height={300}
                                data={dataActivity.sessions}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="1 1" />
                                <XAxis dataKey="day" axisLine={false}/>
                                <YAxis orientation='right' axisLine={false}/>
                                <Tooltip content={<CustomTooltipAcitivity />} wrapperStyle={{ outline: "none" }}/>
                                {/* <Legend /> */}
                                <Bar dataKey="kilogram" fill="#282D30" barSize={8} radius={[5, 5, 0, 0]}/>
                                <Bar dataKey="calories" fill="#E60000" barSize={8} radius={[5, 5, 0, 0]}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className='sessionsPerfsScoreContainer'>

                            <div className='sessionGraph'>
                                <div className='sessionGraph_title'><h5>Durée moyenne des sessions</h5></div>
                                <ResponsiveContainer className='sessionGraphRecharts' width="100%" aspect={1.2}>
                                    <LineChart width={100} height={100} data={dataSessions.sessions} margin={{
                                    top: 30,
                                    right: 10,
                                    left: 10,
                                    bottom: 25,
                                    }}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" x2="1">
                                        <stop offset="5%" stopColor="#EEEEEE" stopOpacity={0.3}/>
                                        <stop offset="55%" stopColor="#FFFFFF" stopOpacity={1}/>
                                        </linearGradient>
                                    </defs>
                                    <Tooltip content={<CustomTooltipSessions />} wrapperStyle={{ outline: "none" }} />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="rgba(255, 255, 255, 0.5)" />
                                    <Line type="monotone" dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div className='performanceGraphContainer'>
                                <ResponsiveContainer className='perfGraph' width="100%" aspect={1}>
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataPerformance.data}
                                    margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                                    <PolarGrid radialLines={false} />
                                    <PolarAngleAxis dataKey="kind" stroke="#FFFFFF"
                                        tick = {{fontSize: '9'}}
                                        tickLine = {false}
                                    />
                                    {/* <PolarRadiusAxis /> */}
                                    <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>

                            <div className='scoreGraph'>
                                <div className='scoreGraph_scoreCenter'>{dataEx[0].uv}% de votre objectif</div>
                                <ResponsiveContainer  width="100%" aspect={1}>
                                    {/* <text className='scoreGraph_scoreCenter'>`${dataEx[0].uv}`</text> */}
                                    <RadialBarChart cx="50%" cy="50%" innerRadius="75%" outerRadius="100%" barSize={10} data={dataEx} startAngle={90} endAngle={450}>
                                        <RadialBar
                                            minAngle={15}
                                            // label={{ position: 'center', fill: '#000' }}
                                            // background
                                            dataKey="uv"
                                            fill= '#FF0101'
                                            cornerRadius={30 / 2}
                                        />
                                        <Legend fill='#8884d8' iconSize={0} layout="horizontal" align="left" verticalAlign="top" wrapperStyle={styleRadial} />
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </div>
                                
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