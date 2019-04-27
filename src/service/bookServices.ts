import BookRepository from '../repository/bookRepository';
import Book from '../model/bookModel';
import Query from '../utils/query';
import BookQuery from './bookQuery';
import { promises } from 'fs';

class BookService {

  async get(query?: Query): Promise<Book[]> {
    const bookQuery = BookQuery.fromParams(query);

    return BookRepository.find(bookQuery, 'title description author genre').lean();
  }

  async getAuthors(): Promise<any> {
    return BookRepository.find({}, 'author');
  }

  async post(book: Book): Promise<Book> {
    const newBook = new BookRepository(book);

    return newBook.save();
  }

  async put(_id: string, book: Book): Promise<Book> {
    return BookRepository.findOneAndUpdate({ _id }, book, { new: true });
  }

  async delete(_id: string): Promise<Book> {
    return BookRepository.findOneAndDelete({ _id });
  }

}

export default new BookService();
