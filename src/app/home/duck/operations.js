import axios from 'axios';

import Creators from './actions';

const increment = Creators.incrementCount;
const decrement = Creators.decrementCount;
const requestSubReddit = Creators.requestSubReddit;
const receiveSubReddit = Creators.receiveSubReddit;

const fetchSubReddit = subReddit => {
  return dispatch => {
    dispatch(requestSubReddit(subReddit));
    return axios.get(`https://reddit.com/r/${subReddit}.json`)
      .then(response => response.json())
      .then(json => {
        const responseData = json;

        const data = responseData.data.children.map(child => {
          const childData = {
            title: child.data.title,
            url: child.data.permalink
          };

          return childData;
        });

        dispatch(receiveSubReddit(data));
      });
  };
};

export default {
  increment,
  decrement,
  fetchSubReddit,
};
