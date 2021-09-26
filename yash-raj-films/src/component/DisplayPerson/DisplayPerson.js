import React from 'react';
import './DisplayPerson.css';

const DisplayPerson = (props) => {
    return (
        <div className="selected-actor">
            <h1>{props.name}</h1>
        </div>
    );
};

export default DisplayPerson;