import api from 'utils/api';
import {
  APP_REVIEW_FETCHING_BY_STORE_ID,
  APP_REVIEW_FETCHING_SUCCESS,
  APP_REVIEW_CLEAR,
  APP_REVIEW_FETCHING_ERROR,
} from 'common/actionTypes';

export default function reducer(state={}, action) {
  switch (action.type) {
    case APP_REVIEW_FETCHING_BY_STORE_ID: 
      return {...state, fetchingByPlayStoreId: true};

    case APP_REVIEW_FETCHING_SUCCESS:
      return {...state, fetchingByPlayStoreId: false, ...action.res};

    case APP_REVIEW_CLEAR:
      return {...state, fetchingByPlayStoreId: false, collection: []};

    default: 
      return state;
  }
}

// actions
export function fetchByPlayStoreId(playStoreId) {
  return (dispatch) => {
    dispatch({type: APP_REVIEW_FETCHING_BY_STORE_ID});
    api
      .get(`/apps/${playStoreId}/reviews`)
      .then(res => {
        dispatch({type: APP_REVIEW_FETCHING_SUCCESS, res});
      })
      .catch(err => {
        dispatch({type: APP_REVIEW_FETCHING_ERROR, err});
      })
    ;
  };
}

export function clear() {
  return {
    type: APP_REVIEW_CLEAR
  };
}
