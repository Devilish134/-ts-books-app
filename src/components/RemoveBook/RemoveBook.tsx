import { Book } from '../../interfaces/Book.interface';

interface Props {
  removeBook: (book: Book) => void;
  book: Book;
}

const RemoveBook: React.FC<Props> = ({
  removeBook,
  book,
}) => {
  return (
    <button onClick={() => removeBook(book.id)}>
      remove Book
    </button>
  );
};

export default RemoveBook;
