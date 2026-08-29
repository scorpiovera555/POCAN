import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Could Not fetch this data for that response');
                }

                return res.json();
            })
            .then((result) => {
                if (isMounted) {
                    setData(result);
                    setError(null);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, error };
}