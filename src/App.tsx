import React from 'react';
import BooksList from './components/BookList/BooksList';
import AddBookForm from './components/AddBookForm/AddBookForm';

const App: React.FC = () => {
  return (
    <div className='container'>
      <header>
        <h1>Books App</h1>
      </header>
      <BooksList />
      <AddBookForm />
    </div>
  );
};

export default App;
