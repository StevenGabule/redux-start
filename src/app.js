"use strict";
import {applyMiddleware ,createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers'
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

const middleware = applyMiddleware(logger)

const store = createStore(reducers, middleware);

store.dispatch(postBooks([
    {
      id: 1,
      title: 'This is the book of the title',
      description: 'This is the book of the description',
      price: 33.00
    },
    {
      id: 2,
      title: 'This is the book of the title 2',
      description: 'This is the book of the description 2',
      price: 133.00
    }
  ]));

store.dispatch(postBooks([{
      id: 3,
      title: "This is the book of the title 3",
      description: 'This is the 3rd book description',
      price: 140
    }]))

store.dispatch(deleteBooks({id: 1}))

store.dispatch(deleteBooks({id: 2}));

store.dispatch(updateBooks({
    id: 3,
    title: 'Learn react and redux'
  }))

store.dispatch(addToCart([{id: 3}]))
