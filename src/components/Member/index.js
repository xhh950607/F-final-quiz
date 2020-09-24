import React, { Component } from 'react';
import { Popover } from 'antd';
import './index.scss';
import 'antd/dist/antd.css';

class Member extends Component {
  popContent = (
    <div className="pop-container">
      {Object.entries(this.props.value).map((entry) => (
        <div className="pop-content-item" key={entry[0]}>{`${entry[0]}:${entry[1]}`}</div>
      ))}
    </div>
  );

  render() {
    const { id, name } = this.props.value;
    return (
      <Popover content={this.popContent}>
        <div className="member">{`${id}.${name}`}</div>
      </Popover>
    );
  }
}

export default Member;
