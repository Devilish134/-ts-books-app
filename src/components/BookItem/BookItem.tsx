import { Book } from '../../interfaces/Book.interface';
import RemoveBook from '../RemoveBook/RemoveBook';
import './BookItem.css';

interface Props {
  book: Book;
  removeBook: (bookId: Book['id']) => void;
}

const BookItem: React.FC<Props> = ({
  book,
  removeBook,
}) => {
  return (
    <>
      <li key={book.id} className='book-item'>
        {book.title} by {book.author},
        {book.price}$
      </li>
      <RemoveBook
        removeBook={removeBook}
        bookId={book.id}
      />
    </>
  );
};

export default BookItem;
