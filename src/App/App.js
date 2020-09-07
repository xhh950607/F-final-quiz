import React, { Component } from 'react';
import './App.scss';
import Trainee from '../Trainee/Trainee';

class App extends Component {
  constructor() {
    super();
    this.state = {
      traineeList: [],
      addTrainee: false,
    };
  }

  componentDidMount() {
    this.refreshTraineeList();
  }

  refreshTraineeList = () => {
    this.fetchTraineeList().then((traineeList) => {
      this.setState({ traineeList });
    });
  };

  fetchTraineeList = () => {
    return fetch('http://localhost:8080/trainees').then((response) => {
      return response.json();
    });
  };

  fetchAddTrainee = (data) => {
    return fetch('http://localhost:8080/trainees', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }).then((response) => {
      return response.status === 201 ? Promise.resolve() : Promise.reject();
    });
  };

  handleAddTraineeClick = () => {
    this.setState({ addTrainee: true });
  };

  handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.setState({ addTrainee: false });
      this.fetchAddTrainee({ name: event.target.value }).then(() => {
        this.refreshTraineeList();
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>学员列表</h1>
        <div className="trainee_list">
          {this.state.traineeList.map((trainee) => (
            <Trainee key={trainee.id} id={trainee.id} name={trainee.name} />
          ))}
          {this.state.addTrainee ? (
            // eslint-disable-next-line jsx-a11y/no-autofocus
            <input autoFocus onKeyDown={this.handleInputKeyDown} />
          ) : (
            <button id="add_trainee_btn" type="button" onClick={this.handleAddTraineeClick}>
              +添加学员
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
