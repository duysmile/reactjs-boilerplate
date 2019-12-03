import api from 'utils/api';
import {
  APPS_FETCHING_BY_STORE_ID,
  APP_FETCH_SUCCESS,
  APP_FETCH_ERROR,
} from 'common/actionTypes';
import { fetchByPlayStoreId as fetchReviewsByPlayStoreId } from 'modules/app/reviews';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case APPS_FETCHING_BY_STORE_ID:
      return { ...state, fetchingByPlayStoreId: true };

    case APP_FETCH_SUCCESS:
      return { ...state, fetchingByPlayStoreId: false, ...action.res };

    default:
      return state;
  }
}

// actions
export function fetchByPlayStoreId(playStoreId) {
  return (dispatch) => {
    dispatch({ type: APPS_FETCHING_BY_STORE_ID });
    api
      .get(`/apps/${playStoreId}`)
      .then(res => {
        dispatch({ type: APP_FETCH_SUCCESS, res });
        dispatch(fetchReviewsByPlayStoreId(playStoreId));
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: APP_FETCH_ERROR, err });
      })
      ;
  };
}
