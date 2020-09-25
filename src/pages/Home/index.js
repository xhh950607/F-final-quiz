import React from 'react';
import GroupList from '../../components/GroupList'
import TrainerList from '../../components/TrainerList'
import TraineeList from '../../components/TraineeList'

const Home = () => (
   // TODO feedback：多处可以使用语义化标签 比如main header section ul li
  <div>
    {/* <GroupList /> */}
    <TrainerList />
    <TraineeList />
  </div>
);

export default Home;
