import { connect } from 'react-redux';

import RedditComponent from './RedditComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => {
  const { subRedditData, showRedditSpinner } = state.home;
  return {
    subRedditData,
    showRedditSpinner
  };
};

const mapDispatchToProps = dispatch => {
  const fetchSubReddits = subReddit => {
    dispatch(homeOperations.fetchSubReddit(subReddit));
  }

  return { fetchSubReddits };
};

const RedditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditComponent);

export default RedditContainer;
