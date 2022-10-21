import { RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';
import './ScoreGraph.scss'
import PropTypes from "prop-types";

/**
 * Styles the legend (Score) of the Score Graph
 */
const styleRadial = {
    top: '10%', 
    transform: 'translate(0, -40%)',
    fontSize: '1.3vw'
    };
/**
 * 
 * @param {array} data the data for the score graph
 * 
 * @returns the score graph
 */
const ScoreGraph = (data) => {
    const scoreEx = [
        {
            name: 'Score',
            uv: data.score
        },
        {
            uv: 100,
            fill: '#FFFFFF'
        },
    ]

    return (
        <div className='scoreGraph'>
            <div className='scoreGraph_scoreCenter'><div className='percentage'>{scoreEx[0].uv}% </div>de votre objectif</div>
            <ResponsiveContainer  width="100%" aspect={1}>
                {/* <text className='scoreGraph_scoreCenter'>`${dataEx[0].uv}`</text> */}
                <RadialBarChart className='radial' innerRadius="75%" outerRadius="100%" barSize={10} data={scoreEx} startAngle={90} endAngle={450}>
                    <RadialBar
                        minAngle={15}
                        dataKey="uv"
                        fill= '#FF0101'
                        cornerRadius={30 / 2}
                    />
                    <Legend fill='#8884d8' iconSize={0} layout="horizontal" align="left" verticalAlign="top" wrapperStyle={styleRadial} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

ScoreGraph.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ScoreGraph