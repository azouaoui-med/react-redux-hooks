import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_START } from './constants';
import { fetchPostsSuccess, fetchPostsFail } from './actions';
import { fetchPosts } from './services';

export function* fetchPostsSaga() {
  try {
    const response = yield fetchPosts();
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFail(error));
  }
}

export function* watchPosts() {
  yield takeEvery(FETCH_POSTS_START, fetchPostsSaga);
}
