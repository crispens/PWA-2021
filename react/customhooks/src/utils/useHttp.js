import { useState, useEffect } from "react";
import axios from "axios";


const useGet = ({initialState = [], url, params = {}}) => {
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const get = async() => {
            try{    
            const {data} = await axios.get(url, params);
            setData(data);
            setLoading(false);
            }
            catch (error) {
                console.log(error)
            }
        }
        get();
    }, [url]);

    return [data, loading];
}


export default useGet;