import { createStore, applyMiddleware } from 'redux';
// import memes from './memes/index';
import thunk from 'redux-thunk';
import memes from './memes';

export default function configStore() {
  return createStore(memes, applyMiddleware(thunk))
}