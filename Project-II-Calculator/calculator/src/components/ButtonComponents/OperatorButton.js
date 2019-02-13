import React from 'react';
import './Button.css';

const OperatorButton = props => {
    return (
        <button className={props.buttonStyle}><i className={props.fontAwesome}></i></button>
    );
};

export default OperatorButton;