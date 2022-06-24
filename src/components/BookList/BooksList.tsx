import React from 'react';
import { Book } from '../../interfaces/Book.interface';
import BookItem from '../BookItem/BookItem';
import './BooksList.css';

export interface Props {
  books: Book[];
  removeBook: (bookId: Book['id']) => void;
}

const BooksList: React.FC<Props> = ({
  books,
  removeBook,
}) => {
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
