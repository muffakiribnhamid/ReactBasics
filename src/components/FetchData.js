import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [data,setData] = useState(null);
    const [count,setCount] = useState(1);

    useEffect(() => {
        fetch('https://dummyjson.com/quotes/random')
        .then(response => response.json())
        .then(data => setData(data))
    },[]);

    



    return (
        <div>
            <h1>Quotes</h1>
            {data ? <pre>{data['quote']}</pre> : "Loading"}
            {data ? <pre>{data['author']}</pre> : "Loading"}
            
        </div>
    )
};

export default FetchData;

