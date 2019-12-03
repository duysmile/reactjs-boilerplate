// Without reduxsauce
import types from './types';

const incrementCount = value => ({
  type: types.INCREMENT_COUNT,
  value: value,
});

const decrementCount = value => ({
  type: types.DECREMENT_COUNT,
  value: value
});

const requestSubReddit = subReddit => ({
  type: types.REQUEST_SUBREDDIT,
  subReddit,
});

const receiveSubReddit = subRedditData => ({
  type: types.RECEIVE_SUBREDDIT,
  subRedditData,
});

export default {
  incrementCount,
  decrementCount,
  requestSubReddit,
  receiveSubReddit
};

// use redux sauce
// import { createActions } from 'reduxsauce';

// const {Creators, Types} = createActions({
//   incrementCount: ['value'],
//   decrementCount: ['value'],
//   requestSubReddit: ['subReddit'],
//   receiveSubReddit: ['subRedditData'] 
// });

// export { Creators, Types };
