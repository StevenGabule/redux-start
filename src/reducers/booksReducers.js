"use strict";

export function booksReducers(state={books: []}, action) {
  switch(action.type) {
    case "POST_BOOK":
      return {books: [...state.books, ...action.payload]}
    case "DELETE_BOOK":
      return {
        books: [...state.books].filter(book => book.id !== action.payload.id)
      }
    case "UPDATE_BOOK":
      const currentBookToUpdate = [...state.books];
      const indexToUpdate  = currentBookToUpdate.findIndex((book) => book.id === action.payload.id);
      const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload.title}
      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)
          ]
      }
    default:
      return state;
  }
}
