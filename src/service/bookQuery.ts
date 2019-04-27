class BookQuery {
  title?: string;

  _id?: string;

  genre?: string;

  static fromParams({ title, genre, author }: any = {}): BookQuery {
    const bookQuery: BookQuery = {};

    if (title) {
      bookQuery.title = title;
    }

    if (genre) {
      bookQuery.genre = genre;
    }

    if (author) {
      bookQuery._id = author;
    }

    return bookQuery;
  }
}

export default BookQuery;