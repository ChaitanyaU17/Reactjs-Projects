import React, { useState, useEffect } from 'react';

const Jocker = () => {
    const[joke, setJoke] = useState({})

    const URL = 'https://official-joke-api.appspot.com/random_joke';

    const newJoke = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setJoke({setup: data.setup, punchline: data.punchline});
    } 

    useEffect(() => {
        const getFristJoke = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setJoke({setup: data.setup, punchline: data.punchline});
        };
        getFristJoke();
    }, []);
    
    
    return(
        <div>
            <h1>Jockes!</h1>
            <div>
                <h2>{joke.setup}</h2>
                <h3>{joke.punchline}</h3>
                <button onClick={newJoke}>new joke</button>
            </div>
        </div>
    );
}

export default Jocker;