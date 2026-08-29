import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then(res => {
            if (!res.ok) {
                throw new Error('Could Not fetch this data for that response');
            }

            return res.json();
        })
        .then(data => {
            setData(data);
            setError(null)
        }).catch(err => setError(err));
    }, [data]);
    
    return {data, error}
}