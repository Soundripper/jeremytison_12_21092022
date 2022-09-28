import axios from "axios";
import { formatScore, formatActivityDay, formatSessionDay, formatPerformance } from '../services/dataModeling.jsx'

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/mocked_data';

const findData = (data, id) => {
    for (const value of data){
        if (value.userId === id || value.id === id){
            return value;
        }
    }
}

const dataGetUser = (mock, id) => {
    if (mock){
        return formatScore(findData(USER_MAIN_DATA, id))
    }
}   

const dataGetActivity = (mock, id) => {
    if (mock){
        return formatActivityDay(findData(USER_ACTIVITY, id))
    }
}  

const dataGetSessions = (mock, id) => {
    if (mock){
        return formatSessionDay(findData(USER_AVERAGE_SESSIONS, id))
    }
}  

const dataGetPerformance = (mock, id) => {
    if (mock){
        return formatPerformance(findData(USER_PERFORMANCE, id))
    }
}  

export {dataGetUser, dataGetActivity, dataGetSessions, dataGetPerformance}
