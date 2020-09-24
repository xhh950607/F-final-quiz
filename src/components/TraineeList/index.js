import React, { Component } from 'react';
import { connect } from 'react-redux';
import Member from '../Member';
import { fetchTraineeList } from '../../utils/request';
import { setTraineeList } from '../../actions/traineeList';
import './index.scss';

class TraineeList extends Component {
  componentDidMount() {
    fetchTraineeList().then((data) => this.props.setTraineeList(data));
  }

  handleAddTraineeClick = () => {
    // this.props.history.push('/create-trainee');
  };

  render() {
    return (
      <section>
        <h1>学员列表</h1>
        <div className="member-list">
          {this.props.traineeList.map((trainee) => (
            <Member key={trainee.id} value={trainee} />
          ))}
          <button className="add-btn" type="button" onClick={this.handleAddTraineeClick}>
            +添加学员
          </button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ traineeList }) => ({ traineeList });

const mapDispatchToProps = (dispatch) => ({
  setTraineeList: (traineeList) => dispatch(setTraineeList(traineeList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TraineeList);
