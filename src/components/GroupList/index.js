import React, { Component } from 'react';
import { Group } from '../Group';

class GroupList extends Component {
  render() {
    return (
      <div>
        <h1>
          分组列表
          <button type="button" onClick={this.handleGroupingClick}>
            分组学员
          </button>
        </h1>
        <div>
          {this.props.groupList.map((group) => (
            <Group
              key={group.id}
              id={group.id}
              name={group.name}
              traineeList={group.traineeList}
              afterRename={this.refreshGroupList}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GroupList;
