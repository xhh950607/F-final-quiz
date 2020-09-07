import React, { Component } from 'react';
import './App.scss';
import Trainee from '../Trainee/Trainee';
import Group from '../Group/Group';

class App extends Component {
  constructor() {
    super();
    this.state = {
      traineeList: [],
      addTrainee: false,
      groupList: [],
    };
  }

  componentDidMount() {
    this.refreshTraineeList();
    this.refreshGroupList();
  }

  refreshTraineeList = () => {
    this.fetchTraineeList().then((traineeList) => {
      this.setState({ traineeList });
    });
  };

  refreshGroupList = () => {
    this.fetchGroups().then((groupList) => {
      this.setState({ groupList });
    });
  };

  fetchTraineeList = () => {
    return fetch('http://localhost:8080/trainees').then((response) => response.json());
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

  fetchGrouping = () => {
    return fetch('http://localhost:8080/groups/grouping').then((response) =>
      response.status === 200 ? Promise.resolve() : Promise.reject()
    );
  };

  fetchGroups = () => {
    return fetch('http://localhost:8080/groups').then((response) => response.json());
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

  handleInputBlur = () => {
    this.setState({ addTrainee: false });
  };

  handleGroupingClick = () => {
    this.fetchGrouping().then(() => this.refreshGroupList());
  };

  render() {
    return (
      <div className="App">
        <h1>
          分组列表
          <button type="button" onClick={this.handleGroupingClick}>
            分组学员
          </button>
        </h1>
        <div>
          {this.state.groupList.map((group) => (
            <Group
              key={group.id}
              id={group.id}
              name={group.name}
              traineeList={group.traineeList}
              afterRename={this.refreshGroupList}
            />
          ))}
        </div>

        <h1>学员列表</h1>
        <div className="trainee_list">
          {this.state.traineeList.map((trainee) => (
            <Trainee key={trainee.id} id={trainee.id} name={trainee.name} />
          ))}
          {this.state.addTrainee ? (
            // eslint-disable-next-line jsx-a11y/no-autofocus
            <input autoFocus onKeyDown={this.handleInputKeyDown} onBlur={this.handleInputBlur} />
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
