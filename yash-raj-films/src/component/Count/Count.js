import React from 'react';
import DisplayPerson from '../DisplayPerson/DisplayPerson';
import './Count.css';

const Count = (props) => {
    console.log(props);
    const { selected } = props;

    let totalPayment = 0;
    for(const person of selected){
        totalPayment = totalPayment + person.salary;
        
    }
    return (
        <div>
            <h1>cart container</h1>
                <h2>Selected : {props.selected.length} </h2>
                <h3>Payment : {totalPayment} Cr.</h3>
                {
                    selected.map(actor => <DisplayPerson name={actor.name} key={actor.id}></DisplayPerson>)
                }
                
        </div>
    );
};

export default Count;