import React from 'react';
import './Curt.css'

const curt = (props) => {
    return (
        <div>
            <h1>Card</h1>
            <p>Selected Items: {props.curt.length}</p>
        </div>
    );
};

export default curt;