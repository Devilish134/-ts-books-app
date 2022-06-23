import React, { useState } from 'react';
import { Book } from '../../interfaces/Book.interface';
import { randomID } from '../../utils/randomId';
import './AddBookForm.css';

interface Props {
  addBook: (book: Book) => void;
}

const AddBookForm: React.FC<Props> = ({
  addBook,
}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const book = {
      id: randomID(10),
      title,
      author,
      price,
    };
    console.log(book);
    addBook(book);
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
