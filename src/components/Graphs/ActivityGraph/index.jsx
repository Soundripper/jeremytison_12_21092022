import { Label, RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer} from 'recharts';
import { default as Dot_Red } from '../../../assets/Dot_Red.svg';
import { default as Dot_Black } from '../../../assets/Dot_Black.svg';
import './index.scss'

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

const ActivityGraph = (data) => {
    console.log(data);
    return (
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
                data={data.dataActivity}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="1 1 1" vertical={false} />
                <XAxis dataKey="day" axisLine={false} fontSize={14} tickLine={false}/>
                <YAxis orientation='right' axisLine={false} fontSize={14} tickLine={false}/>
                <Tooltip content={<CustomTooltipAcitivity />} wrapperStyle={{ outline: "none" }}/>
                {/* <Legend /> */}
                <Bar dataKey="kilogram" fill="#282D30" barSize={8} radius={[5, 5, 0, 0]}/>
                <Bar dataKey="calories" fill="#E60000" barSize={8} radius={[5, 5, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )

}

export default ActivityGraph;