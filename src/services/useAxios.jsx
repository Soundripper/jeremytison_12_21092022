import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get('./mocks/mocked_data.js'); 
            const data = await res.js();
            setData(() => data);
            setIsLoading(false);
        } catch (error) {
            setHasError(true);
            setIsLoading(false);
        }
    }

    getData();
    console.log(data);

    return(
        {
        hasError,
        isLoading,
        data
        }
      )

}

export default useAxios;