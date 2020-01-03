import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL
} from './constants';

export const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
