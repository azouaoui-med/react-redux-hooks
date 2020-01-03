import {
  FETCH_POSTS_START,
  FETCH_POSTS_FAIL,
  FETCH_POSTS_SUCCESS
} from './constants';

export function fetchPostsStart() {
  return {
    type: FETCH_POSTS_START
  };
}
export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}
export function fetchPostsFail(error) {
  return {
    type: FETCH_POSTS_FAIL,
    error
  };
}
