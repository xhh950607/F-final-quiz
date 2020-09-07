import React, { Component } from 'react';
import Trainee from '../Trainee/Trainee';
import './Group.scss';

class Group extends Component {
  constructor() {
    super();
    this.state = {
      rename: false,
    };
  }

  handleNameBtnClick = () => {
    this.setState({ rename: true });
  };

  handleInputBlur = () => {
    this.setState({ rename: false });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.setState({ rename: false });
      this.fetchRename({ name: event.target.value }).then(() => {
        this.props.afterRename();
      });
    }
  };

  fetchRename = (data) => {
    return fetch(`http://localhost:8080/groups/${this.props.id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }).then((response) => {
      return response.status === 200 ? Promise.resolve() : Promise.reject();
    });
  };

  render() {
    return (
      <div className="group">
        <div className="name">
          {this.state.rename ? (
            // eslint-disable-next-line jsx-a11y/no-autofocus
            <input autoFocus onBlur={this.handleInputBlur} onKeyDown={this.handleKeyDown} />
          ) : (
            <button type="button" onClick={this.handleNameBtnClick}>
              {this.props.name}
            </button>
          )}
        </div>
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
