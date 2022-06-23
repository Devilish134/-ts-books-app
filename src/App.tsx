import React from 'react';
import { useState } from 'react';
import AddBookForm from './components/AddBookForm/AddBookForm';
import BooksList from './components/BookList/BooksList';
import { Book } from './interfaces/Book.interface';

export const booksData: Book[] = [
  {
    id: 'te1314derw',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    price: 25,
  },
  {
    id: 't32s14dzdw',
    title: 'East of Eden',
    author: 'John Steinbeck',
    price: 30,
  },
];

const App: React.FC = () => {
  const [books, setBooks] = useState(booksData);

  const addBook = (book: Book) => {
    setBooks([...books, book]);
  };

  const removeBook = (e: any) => {
    const thisBook =
      e.target.getAttribute('key');
    setBooks(
      booksData.filter(
        (book) => book.id !== thisBook
      )
    );
  };

  return (
    <div className='container'>
      <header>
        <h1>Books App</h1>
      </header>
      <BooksList
        removeBook={removeBook}
        books={books}
      />
      <AddBookForm addBook={addBook} />
    </div>
  );
};

export default App;
