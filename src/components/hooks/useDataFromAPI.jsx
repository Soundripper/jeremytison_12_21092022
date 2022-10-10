import { useState, useEffect } from "react";
import axios from "axios";

const useDataFromAPI = (id) => {
    const [dataUserFromAPI, setDataUserFromAPI] = useState(null);
    const [dataPerformanceFromAPI, setDataPerformanceFromAPI] = useState(null);
    const [dataActivityFromAPI, setDataActivityFromAPI] = useState(null);
    const [dataSessionsFromAPI, setDataSessionsFromAPI] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setDataUserFromAPI(await axios.get(`http://localhost:3001/user/${id}`));
                setDataPerformanceFromAPI(await axios.get(`http://localhost:3001/user/${id}/performance`));
                setDataActivityFromAPI(await axios.get(`http://localhost:3001/user/${id}/activity`));
                setDataSessionsFromAPI(await axios.get(`http://localhost:3001/user/${id}/average-sessions`));
            } catch (error) {
              console.log("error", error);
            }
          };
      
        fetchData();
    },[id])
    
    console.log(dataUserFromAPI);
    console.log(dataPerformanceFromAPI);
    console.log(dataActivityFromAPI);
    console.log(dataSessionsFromAPI);
    return {dataUserFromAPI, dataPerformanceFromAPI, dataActivityFromAPI, dataSessionsFromAPI};

}

export default useDataFromAPI;