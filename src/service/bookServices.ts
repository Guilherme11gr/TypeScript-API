import BookRepository from '../repository/bookRepository';
import Book from '../model/bookModel';

class BookService {

  async get(): Promise<Book[]> {
    return BookRepository.find({}, 'title description author genre').lean();
  }

  async getByAuthor(author: string): Promise<Book[] | Book> {
    return BookRepository.find({ author: author }, 'title description author genre').lean();
  }

  async getByGenre(genre: string): Promise<Book[] | Book> {
    return BookRepository.find({ genre: genre }, 'title description author genre').lean();
  }

  async post(book: Book): Promise<Book> {
    const newBook = new BookRepository(book);
    return newBook.save();
  }
}

export default new BookService();
