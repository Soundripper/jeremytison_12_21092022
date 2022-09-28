import { Label, RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer} from 'recharts';
import './SessionGraph.scss'
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

const SessionGraph = (data) => {
    console.log(data);
    return (
        <div className='sessionGraph'>
            <div className='sessionGraph_title'>Durée moyenne des sessions</div>
            <ResponsiveContainer className='sessionGraphRecharts' width="100%" aspect={1.2}>
                <LineChart width={100} height={100} data={data.dataSessions.sessions} margin={{
                top: 0,
                right: 10,
                left: 10,
                bottom: 15,
                }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" x2="1">
                    <stop offset="5%" stopColor="#EEEEEE" stopOpacity={0.3}/>
                    <stop offset="55%" stopColor="#FFFFFF" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltipSessions />} wrapperStyle={{ outline: "none" }} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="rgba(255, 255, 255, 0.5)" fontSize={12}/>
                <Line type="monotone" dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SessionGraph

