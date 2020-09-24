import React, { Component } from 'react';
import { connect } from 'react-redux';
import Member from '../Member';
import { fetchTrainerList, fetchCreateTrainer } from '../../utils/request';
import { setTrainerList } from '../../actions/trainerList';
import './index.scss';

class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
  }

  componentDidMount() {
    this.refreshTrainerList();
  }

  refreshTrainerList = () => {
    fetchTrainerList().then((data) => this.props.setTrainerList(data));
  };

  handleAddTrainerClick = () => {
    this.setState({ editMode: true });
  };

  handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.setState({ editMode: false });
      fetchCreateTrainer({ name: event.target.value }).then(() => {
        this.refreshTrainerList();
      });
    }
  };

  handleInputBlur = () => {
    this.setState({ editMode: false });
  };

  render() {
    return (
      <section>
        <h1>讲师列表</h1>
        <div className="member-list">
          {this.props.trainerList.map((trainer) => (
            <Member key={trainer.id} value={trainer} />
          ))}
          {this.state.editMode ? (
            // eslint-disable-next-line jsx-a11y/no-autofocus
            <input className="trainer-input" autoFocus onKeyDown={this.handleInputKeyDown} onBlur={this.handleInputBlur} />
          ) : (
            <button className="add-btn" type="button" onClick={this.handleAddTrainerClick}>
              +添加讲师
            </button>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ trainerList }) => ({ trainerList });

const mapDispatchToProps = (dispatch) => ({
  setTrainerList: (trainerList) => dispatch(setTrainerList(trainerList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainerList);
