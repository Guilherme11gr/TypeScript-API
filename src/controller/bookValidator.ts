import Book from "../model/bookModel";
import ValidatorContract from "../utils/validator";

class BookValidator extends ValidatorContract {

  isBookValid(book: Book): boolean {
    const { title, description, author, genre } = book;

    this.isTitleValid(title);

    this.isDescriptionValid(description);

    this.isAuthorValid(author);

    this.isGenresValid(genre);

    return this.isValid();
  }

  isTitleValid(title: string): void {
    this.isRequired(title, 'Title is required!');
   
    this.hasMaxLen(title, 50, 'Title must be a maximum of 50 characters');
  }

  isDescriptionValid(description: string): void {
    this.isRequired(description, 'Description is required!');
   
    this.hasMinLen(description, 50, 'Description must be a the least of 50 characters');
   
    this.hasMaxLen(description, 1500, 'Description must be a maximum of 1500 characters');
  }

  isAuthorValid(author: string): void {
    this.isRequired(author, 'Author is required!');
    
    this.hasMaxLen(author, 35, 'Author must be a maximum of 35 characters');
  }

  isGenresValid(genre: Array<string>): void {
    this.isRequired(genre, 'Genre is required!');
  }

}

export default BookValidator