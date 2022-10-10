import axios from "axios";
import { formatScore, formatActivityDay, formatSessionDay, formatPerformance } from '../services/dataModeling.jsx';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/mocked_data';

const findData = (data, id) => {
        for (const value of data){
            if (value.userId === Number(id) || value.id === Number(id)){
                return value;
            }
        }
}

let dataUserFromAPI
let dataPerformanceFromAPI
let dataActivityFromAPI
let dataSessionsFromAPI    

const dataGetUser = (mock, id) => {
    if (mock){
        return formatScore(findData(USER_MAIN_DATA, id))
    }
    else{
        const fetchData = async () => {
            await axios.get(`http://localhost:3001/user/${id}`)
            .then(response => {
                dataUserFromAPI = formatScore(response.data.data);
                console.log(dataUserFromAPI);
                return {dataUserFromAPI};
            })
        }
        fetchData()
    }  
}

const dataGetActivity = (mock, id) => {
    if (mock){
        return formatActivityDay(findData(USER_ACTIVITY, id))
    }
    else{
        const fetchData = async () => {
            await axios.get(`http://localhost:3001/user/${id}/activity`)
            .then(response => {
                dataActivityFromAPI = formatActivityDay(response.data.data);
                console.log(dataActivityFromAPI);
                return {dataActivityFromAPI};
            })
        }
        fetchData()
    }  
}  

const dataGetSessions = (mock, id) => {
    if (mock){
        return formatSessionDay(findData(USER_AVERAGE_SESSIONS, id))
    }
    else{
        const fetchData = async () => {
            await axios.get(`http://localhost:3001/user/${id}/average-sessions`)
            .then(response => {
                dataSessionsFromAPI = formatSessionDay(response.data.data);
                console.log(dataSessionsFromAPI);
                return {dataSessionsFromAPI};
            })
        }
        fetchData()
    }  
}  

const dataGetPerformance = (mock, id) => {
    if (mock){
        return formatPerformance(findData(USER_PERFORMANCE, id))
    }
    else{
        const fetchData = async () => {
            await axios.get(`http://localhost:3001/user/${id}/performance`)
            .then(response => {
                dataPerformanceFromAPI = formatPerformance(response.data.data);
                console.log(dataPerformanceFromAPI);
                return {dataPerformanceFromAPI};
            })
        }
        fetchData()
    }  
}  

export {dataGetUser, dataGetPerformance, dataGetActivity, dataGetSessions}
