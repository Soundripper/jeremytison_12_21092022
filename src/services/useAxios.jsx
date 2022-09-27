import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
    const [dataUser, setDataUser] = useState([]);
    const [dataSessions, setDataSessions] = useState([]);
    const [dataPerformance, setDataPerformance] = useState([]);
    const [dataActivity, setDataActivity] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect (() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const resUser = await axios.get('/mocks/user.json');
                const resPerformance = await axios.get('/mocks/performance.json');
                const resActivity = await axios.get('/mocks/activity.json');
                const resSessions = await axios.get('/mocks/average-sessions.json');
                setDataUser(resUser.data.data);
                setDataPerformance(resPerformance.data.data);
                setDataActivity(resActivity.data.data);
                setDataSessions(resSessions.data.data);
                setIsLoading(false);
            } catch (error) {
                setHasError(true);
                setIsLoading(false);
            }
        }
        getData();
    }, [])
    
    return(
        {
        hasError,
        isLoading,
        dataActivity,
        dataUser,
        dataSessions,
        dataPerformance
        }
    )
}
export default useAxios;