import { Label, RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer} from 'recharts';
import './ScoreGraph.scss'


const styleRadial = {
    top: '10%', 
    transform: 'translate(0, -40%)',
    fontSize: 12
    };

const ScoreGraph = (data) => {
    console.log(data);
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

    console.log(scoreEx);
    return (
        <div className='scoreGraph'>
            <div className='scoreGraph_scoreCenter'><div className='percentage'>{scoreEx[0].uv}% </div>de votre objectif</div>
            <ResponsiveContainer  width="100%" aspect={1}>
                {/* <text className='scoreGraph_scoreCenter'>`${dataEx[0].uv}`</text> */}
                <RadialBarChart className='radial' innerRadius="75%" outerRadius="100%" barSize={10} data={scoreEx} startAngle={90} endAngle={450}>
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
    )
}

export default ScoreGraph