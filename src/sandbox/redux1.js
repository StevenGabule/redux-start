"use strict";
import {createStore} from 'redux';
// step 3 define reducers
const reducer = function(state={books: []}, action) {
  switch(action.type) {
    case "POST_BOOK":
      /*const newBook = state.books.concat(action.payload);
      return {newBook};*/
      return {books: [...state.books, ...action.payload]}
    default:
      return state;
  }
}

// step 1 create the store
const store = createStore(reducer);

store.subscribe(function() {
  console.log('current state is:', store.getState());
})

// step 2 create and dispatch actions
store.dispatch({
  type: "POST_BOOK",
  payload: [
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
  ],
});

store.dispatch({
  type: "POST_BOOK",
  payload: {
    id: 3,
    title: "This is the book of the title 3",
    description: 'This is the 3rd book description',
    price: 140
  }
})


