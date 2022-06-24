import { Book } from '../../interfaces/Book.interface';
import './RemoveBook.css';

interface Props {
  removeBook: (bookId: Book['id']) => void;
  bookId: Book['id'];
}

const RemoveBook: React.FC<Props> = ({
  removeBook,
  bookId,
}) => {
  return (
    <button
      className='remove-book-button'
      onClick={() => removeBook(bookId)}
    >
      Remove
    </button>
  );
};

export default RemoveBook;
