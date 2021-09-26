import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import Person from '../Person/Person';
import './Main.css';

const Main = () => {

    const [actors,setActors] = useState([]);
    const [selection,setSelection] = useState([]);

    //   used useEffect hook for fetching data 
    useEffect( ()=>{

        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setActors(data));

    }, []);

        // event handler function 
    const buttonClick = (person) => {
        const allSelection = [...selection,person];
        setSelection(allSelection);
    }

    return (
        <div className="main-container">

            <div className="person-container">
                {
                    actors.map(actor => <Person name={actor} key={actor.id} buttonClick={buttonClick}></Person>)
                }
            </div>

            <div className="cart-container">
                <Count selected={selection}></Count>
            </div>
           
        </div>
    );
};

export default Main;