import React from 'react';
import './Person.css';

const Person = (props) => {
    console.log(props.name);
    const {name,img,role,age,country,salary} = props.name
    return (
        <div className="display-person">
            <div>
                <img className="person-img" src={img} alt="" />
                <h3>{name}</h3>
                <h4>{role}</h4>
                <h5>{age}</h5>
                <h6>{country}</h6>
                <p>{salary} Cr.</p>
            </div>
             
        </div>
    );
};

export default Person;