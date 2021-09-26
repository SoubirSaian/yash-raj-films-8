import React from 'react';
import DisplayPerson from '../DisplayPerson/DisplayPerson';
import './Count.css';

const Count = (props) => {
    
    // destructuring props data
    const { selected } = props;
     
    // estimating total selected person cost
    let totalPayment = 0;
    for(const person of selected){
        totalPayment = totalPayment + person.salary;
        
    }
    return (
        <div className="custing-section">

            <h1>Your Custing :</h1>
                <h2>Selected : <span className="count">{props.selected.length}</span> </h2>

                <h2>Total Payment : <span className="count"> {totalPayment} Cr.</span></h2>

                {/* displaying actors name dynamically by selection */}
                {
                    selected.map(actor => <DisplayPerson name={actor.name} key={actor.id}></DisplayPerson>)
                }
                
        </div>
    );
};

export default Count;