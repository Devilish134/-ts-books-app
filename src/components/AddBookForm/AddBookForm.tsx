import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/booksRedux';
import { randomID } from '../../utils/randomId';
import './AddBookForm.css';

const AddBookForm: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(0);

  const id = randomID(10);

  const addBook = (
    id: string,
    title: string,
    author: string,
    price: number
  ) => {
    const action = addBookAction({
      id,
      title,
      author,
      price,
    });
    dispatch(action);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    addBook(id, title, author, price);
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
