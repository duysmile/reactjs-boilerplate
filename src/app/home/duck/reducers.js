import types from './types';

const INITIAL_STATE = {
  count: 0,
  subReddit: '',
  showSpinner: false,
  subRedditData: [],
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.INCREMENT_COUNT: {
      const {value} = action;
      return {
        ...state,
        count: state.count + value
      };
    }
    case types.DECREMENT_COUNT: {
      const {value} = action;
      return {
        ...state,
        count: state.count - value
      };
    }
    case types.REQUEST_SUBREDDIT: {
      const {subReddit} = action;
      return {
        ...state,
        subReddit,
        subRedditData: [],
        showSpinner: true,
      };
    }
    case types.RECEIVE_SUBREDDIT: {
      const {subRedditData} = action;
      return {
        ...state,
        subRedditData,
        showSpinner: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
