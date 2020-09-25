import React, { Component } from 'react';
import { Popover } from 'antd';
import './index.scss';
import 'antd/dist/antd.css';

class Member extends Component {
  popContent = (
    <div className="pop-container">
      {/* TODO feedback: 实现得挺不错，要是用Object.keys来实现可读性会更高一些 */}
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
