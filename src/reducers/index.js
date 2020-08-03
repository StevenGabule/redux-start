import {combineReducers} from 'redux';

import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// merge the reducers
export default combineReducers({
  books: booksReducers,
  cart: cartReducers,
})
