import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        try {
            const res = await axios.get('../../mocks/mocked_data.js');
            const data = await res.js();
            setData(() => data);
            setIsLoading(false);
        } catch (error) {
            
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