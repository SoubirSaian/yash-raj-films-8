import React from 'react';
import './DisplayPerson.css';

const DisplayPerson = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
        </div>
    );
};

export default DisplayPerson;