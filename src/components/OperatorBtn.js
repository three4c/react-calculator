import React from 'react';

const Operator = ({ o, onClick }) => (
    <button className="operator__btn" onClick={onClick}>{o}</button>
);

export default Operator;