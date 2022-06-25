import React, { useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { addBookAction } from '../../redux/booksRedux';
import { BooksAction } from '../../redux/bookTypes';
import { StoreState } from '../../redux/mainTypes';
import { randomID } from '../../utils/randomId';
import './AddBookForm.css';

const AddBookForm: React.FC = () => {
  const dispatch = useDispatch;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(0);

  // state reference
  const books = useSelector(
    (state: StoreState) => state.books
  );

  const addBook = (
    id: string,
    title: string,
    author: string,
    price: number
  ) =>
    dispatch(
      addBookAction()
    );

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    addBook(id: randomID(10), title, author, price);
    console.log(books);
    setTitle(' ');
    setAuthor(' ');
    setPrice(0);
  };

  return (
    <form
      className='add-book-form'
      onSubmit={handleSubmit}
    >
      Title:
      <input
        type='text'
        value={title}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>
        ) => setTitle(e.target.value)}
      />
      Author:
      <input
        type='text'
        value={author}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>
        ) => setAuthor(e.target.value)}
      />
      Price:
      <input
        type='number'
        value={price}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>
        ) => setPrice(parseInt(e.target.value))}
      />
      <button>Add book</button>
    </form>
  );
};

export default AddBookForm;
