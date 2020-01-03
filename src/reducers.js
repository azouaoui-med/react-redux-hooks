import { combineReducers } from 'redux';
import { counterReducer } from './examples/Counter';
import { postsReducer } from './examples/Posts';

export default function createReducer() {
  const rootReducer = combineReducers({
    counter: counterReducer,
    post: postsReducer
  });
  return rootReducer;
}
