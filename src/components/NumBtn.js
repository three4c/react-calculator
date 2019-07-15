import React from 'react';

const NumBtn = ({ n, onClick }) => (
    <button className="number__btn" onClick={onClick}>{n}</button>
);

export default NumBtn;