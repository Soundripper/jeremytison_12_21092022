const formatScore = (data) => {
    if (!data.score){
        data.score = data.todayScore
    }
    data.score = (data.score * 10);
    return data
}

const formatActivityDay = (data) => {
    for (let i=0; i<data.sessions.length; i++) {
        data.sessions[i].day = [i+1];
    }
    return data
}

const formatSessionDay = (data) => {
    const days = ['L','M', 'M', 'J', 'V', 'S', 'D']
    for (let i=0; i<data.sessions.length; i++){
        data.sessions[i].day = days[i]
    }
    return data
}

const formatPerformance = (data) => {
    // console.log(data.kind[1]);
    const perfNames = [
        '',
        'cardio',
        'énergie',
        'endurance',
        'force',
        'vitesse',
        'intensité'
    ]
    for (let i=0; i<data.kind.length; i++){
        data.kind[i+1] = perfNames[i]
    }
    console.log(data.kind[0]);
    return data
}

export {formatScore, formatActivityDay, formatSessionDay, formatPerformance}