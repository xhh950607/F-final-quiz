import React from 'react';
import './Trainee.scss';

const Trainee = ({ id, name }) => <div className="trainee">{`${id}.${name}`}</div>;

export default Trainee;
