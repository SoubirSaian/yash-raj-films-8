import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Main.css';

const Main = () => {

    const [actors,setActors] = useState([]);

    useEffect( ()=>{

        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setActors(data));

    }, []);

    return (
        <div className="main-container">

            <div className="person-container">
            {
                actors.map(actor => <Person name={actor} key={actor.name}></Person>)
            }
            </div>

            <div className="cart-container">
                <h1>cart container</h1>
            </div>
           
        </div>
    );
};

export default Main;