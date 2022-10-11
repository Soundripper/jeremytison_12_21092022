import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { default as Dot_Red } from '../../../assets/Dot_Red.svg';
import { default as Dot_Black } from '../../../assets/Dot_Black.svg';
import './index.scss'
import PropTypes from "prop-types";

/**
 * 
 * @param {Object} CustomTooltipAcitivity Custom activity tooltip 
 * @param {boolean} CustomTooltipAcitivity.active If hovering day data
 * @param {array} CustomTooltipAcitivity.payload Weight and calories
 * @returns Custom tooltip when hovering data
 */
const CustomTooltipAcitivity = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
        <div className="custom-tooltip-activity">
            <p className="user-number">
                {payload[0].payload.kilogram}kg
            </p>
            <p className="user-number">
                {payload[0].payload.calories}kCal
            </p>
        </div>
        );
    }
    return null;
};

/**
 * 
 * @param {array} data Datas for the activity graph
 * @returns the daily activity graph
 */
const ActivityGraph = (data) => {
    return (
        <div className='activityGraph'>
            <div className='activityGraph_titleContainer'>
                <div className='activityGraph_title'><h6>Activité quotidienne</h6></div>
                <div className='activityGraphLegend'>
                    <div className='activityGraph_mesure'><img className='mesureDot' src={Dot_Black} alt="" /><h6>Poids (kg)</h6></div>
                    <div className='activityGraph_mesure'><img className='mesureDot' src={Dot_Red} alt="" /><h6>Calories brûlées (kCal)</h6></div>
                </div>
            </div>
            <ResponsiveContainer width="100%" aspect={5}>
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
                <YAxis yAxisId="kg" orientation='right' axisLine={false} fontSize={14} tickLine={false} tickCount={4} dataKey="kilogram" domain={['dataMin-1', 'dataMax+1']} />
                <YAxis yAxisId="cal" hide={true} domain={[0, 'dataMax+100']} />
                <Tooltip content={<CustomTooltipAcitivity />} wrapperStyle={{ outline: "none" }}/>
                {/* <Legend /> */}
                <Bar dataKey="kilogram" fill="#282D30" barSize={8} radius={[5, 5, 0, 0]} yAxisId="kg"/>
                <Bar dataKey="calories" fill="#E60000" barSize={8} radius={[5, 5, 0, 0]} yAxisId="cal"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )

}

ActivityGraph.propTypes = {
    dataActivity: PropTypes.array,
}

export default ActivityGraph;