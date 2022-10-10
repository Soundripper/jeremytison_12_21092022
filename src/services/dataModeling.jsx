const formatScore = (data) => {
    if (!data.score){
        data.score = data.todayScore
    }
    data.score = (data.score*100);
    return data
}

const formatActivityDay = (data) => {
    for (let i=0; i<data.sessions.length; i++) {
        data.sessions[i].day = [i+1];
    }
    return data
}

const formatSessionDay = (data) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    for (let i=0; i<data.sessions.length; i++){
        data.sessions[i].day = days[i]
    }
    return data
}

const formatPerformance = (data) => {
    const perfNames = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
    const dataFormat = []
    data.data.forEach((item) => {
        const objectFormat = {
            value: item.value,
            kind: perfNames[item.kind - 1]
        }
    dataFormat.push(objectFormat)
    })
    data.data = dataFormat.reverse();
    return data
}

export {formatScore, formatActivityDay, formatSessionDay, formatPerformance}