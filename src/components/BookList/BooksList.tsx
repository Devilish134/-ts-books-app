import React from 'react';
import BookItem from '../BookItem/BookItem';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Book } from '../../interfaces/Book.interface';
import { removeBookAction } from './../../redux/booksRedux';
import { StoreState } from '../../redux/mainTypes';

import './BooksList.css';

const BooksList: React.FC = () => {
  const dispatch = useDispatch();

  // state reference
  const books = useSelector(
    (state: StoreState) => state.books
  );

  const removeBook = (id: string) =>
    dispatch(removeBookAction(id));

  return (
    <ul className='books-list'>
      {books.map((book: Book) => (
        <BookItem
          removeBook={removeBook}
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
