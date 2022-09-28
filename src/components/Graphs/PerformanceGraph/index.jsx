import { Label, RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer} from 'recharts';
import './index.scss'
const PerformanceGraph = (data) => {
    console.log(data);
    return (
        <div className='performanceGraphContainer'>
        <ResponsiveContainer className='perfGraph' width="100%" aspect={1}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.dataPerformance.data}
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
    )
}

export default PerformanceGraph