import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import './index.scss'
import PropTypes from "prop-types";

/**
 * 
 * @param {array} data the data for the performance graph
 * @returns the performance activity graph
 */
const PerformanceGraph = (data) => {
    return (
        <div className='performanceGraphContainer'>
        <ResponsiveContainer className='perfGraph' width="100%" aspect={1}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data.dataPerformance.data}
            margin={{top: 1, right: 1, left: 1, bottom: 1}}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" stroke="#FFFFFF"
                tick = {{fontSize: '0.6vw', dy:1}}
                tickLine = {false}
            />
            {/* <PolarRadiusAxis /> */}
            <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
    )
}

PerformanceGraph.propTypes = {
    data: PropTypes.array,
}

export default PerformanceGraph