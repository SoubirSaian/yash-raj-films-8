import React from 'react';
import './Person.css';

const Person = (props) => {
    // console.log(props);
    const {name,img,role,age,country,salary} = props.name;
    return (
        <div>
            <div className="display-person">
                <img className="person-img" src={img} alt="" />
                <h2>{name}</h2>
                <h1>{role}</h1>
                <h4>Age : {age}</h4>
                <h3>Country : {country}</h3>
                <h3>Fee : {salary} Cr.</h3>
                <button className="btn-regular" onClick={()=> props.buttonClick(props.name)}>select</button>
            </div>
             
        </div>
    );
};

export default Person;