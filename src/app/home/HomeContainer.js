import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => {
  const { count } = state.home;

  return { count };
};

const mapDispatchToProps = dispatch => {
  const onIncrementCount = () => dispatch(homeOperations.increment(1));
  const onDecrementCount = () => dispatch(homeOperations.decrement(1));
  return {
    onIncrementCount,
    onDecrementCount
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);

export default HomeContainer;
