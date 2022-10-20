import { XAxis, Tooltip, LineChart, Line, ResponsiveContainer} from 'recharts';
import './SessionGraph.scss'
import PropTypes from "prop-types";

/**
 * 
 * @param {object} CustomTooltipSessions
 * @param {boolean} CustomTooltipSessions.active Boolean changing if hovering day data
 * @param {array} CustomTooltipSessions.payload Day and session length
 * @returns custom tooltip when hovering data (in minutes)
 */
const CustomTooltipSessions = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
        <div className="custom-tooltip-sessions">
            <p>
                {payload[0].payload.sessionLength}min
            </p>
        </div>
        );
    }
    return null;
};

/**
 * 
 * @param {array} data from average sessions
 * @returns average sessions graph
 */
const SessionGraph = (data) => {
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

SessionGraph.propTypes = {
    data: PropTypes.array.isRequired,
}

export default SessionGraph

