import axios from "axios";
import { formatScore, formatActivityDay, formatSessionDay, formatPerformance } from '../services/dataModeling.jsx';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/mocked_data';

/**
 * Function that filters the data coming from the mocked data. Called if (mock = true) on profile page.
 * 
 * @param {array} data Data that comes from the Mocked data
 * @param {number} id User Id
 * @returns Mocked data filtered with the User Id
 */
const findData = (data, id) => {
        for (const value of data){
            if (value.userId === Number(id) || value.id === Number(id)){
                return value;
            }
        }
}
/**
 * 
 * @param {boolean} mock Check if using mocked data
 * @param {number} id User id from params
 * @returns formatted user Data
 */
const dataGetUser = async (mock, id) => {
    if (mock){
        return formatScore(findData(USER_MAIN_DATA, id))
    }
    else{
        const response = await axios.get(`http://localhost:3001/user/${id}`)
        return formatScore(await response.data.data);
    }  
}
/**
 * 
 * @param {boolean} mock Check if using mocked data
 * @param {number} id User id from params
 * @returns formatted activity Data
 */
const dataGetActivity = async (mock, id) => {
    if (mock){
        return formatActivityDay(findData(USER_ACTIVITY, id))
    }
    else{
        const response = await axios.get(`http://localhost:3001/user/${id}/activity`)
        return formatActivityDay(await response.data.data);
    }  
}  
/**
 * 
 * @param {boolean} mock Check if using mocked data
 * @param {number} id User id from params
 * @returns formatted average-sessions Data
 */
const dataGetSessions = async (mock, id) => {
    if (mock){
        return formatSessionDay(findData(USER_AVERAGE_SESSIONS, id))
    }
    else{
        const response = await axios.get(`http://localhost:3001/user/${id}/average-sessions`)
        return formatSessionDay(await response.data.data);
    }  
}  
/**
 * 
 * @param {boolean} mock Check if using mocked data
 * @param {number} id User id from params
 * @returns formatted performance Data
 */
const dataGetPerformance = async (mock, id) => {
    if (mock){
        return formatPerformance(findData(USER_PERFORMANCE, id))
    }
    else{
        const response = await axios.get(`http://localhost:3001/user/${id}/performance`)
        return formatPerformance(await response.data.data);
    }  
}  

export {dataGetUser, dataGetPerformance, dataGetActivity, dataGetSessions}
