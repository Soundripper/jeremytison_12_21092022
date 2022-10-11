/**
 * 
 * @param {array} data from User data
 * @returns User data with Score multiplied by 100 to match percentage format
 */
const formatScore = (data) => {
    if (!data.score){
        data.score = data.todayScore
    }
    data.score = (data.score*100);
    return data
}
/**
 * 
 * @param {array} data from Activity data
 * @returns Activity data with days from 1 to 7 instead of full dates
 */
const formatActivityDay = (data) => {
    for (let i=0; i<data.sessions.length; i++) {
        data.sessions[i].day = [i+1];
    }
    return data
}
/**
 * 
 * @param {array} data from Activity data
 * @returns Sessions data with days from L to D instead of days numbers
 */
const formatSessionDay = (data) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    for (let i=0; i<data.sessions.length; i++){
        data.sessions[i].day = days[i]
    }
    return data
}
/**
 * 
 * @param {array} data from Activity data
 * @returns Performance data with names in french
 */
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