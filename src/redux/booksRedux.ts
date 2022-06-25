/* ACTIONS */

import { Book } from '../interfaces/Book.interface';
import {
  ADD_BOOK,
  BooksAction,
  BooksState,
  REMOVE_BOOK,
} from './bookTypes';

// action creators
export const addBookAction = (
  payload: Book
): BooksAction => ({
  payload,
  type: ADD_BOOK,
});
export const removeBookAction = (
  payload: string
): BooksAction => ({
  payload,
  type: REMOVE_BOOK,
});

// reducer
const reducer = (
  statePart: BooksState = [],
  action: BooksAction
): BooksState => {
  switch (action.type) {
    case ADD_BOOK:
      return [...statePart, action.payload];
    case REMOVE_BOOK:
      return statePart.filter(
        (book) => book.id !== action.payload
      );
    default:
      return statePart;
  }
};

export default reducer;
