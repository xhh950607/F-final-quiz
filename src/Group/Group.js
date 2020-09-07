import React, { Component } from 'react';
import Trainee from '../Trainee/Trainee';
import './Group.scss';

class Group extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
    };
  }

  render() {
    return (
      <div className="group">
        <div className="name">{this.state.name}</div>
        <div className="trainees">
          {this.props.traineeList.map((trainee) => (
            <Trainee key={trainee.id} id={trainee.id} name={trainee.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Group;
