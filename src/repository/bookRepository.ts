import Book from '../model/bookModel';

const BookRepository = new Book().getModelForClass(Book);

export default BookRepository;
