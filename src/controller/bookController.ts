import * as httpStatus from 'http-status';
import { Request, Response, Router } from 'express';
import BookService from '../service/bookServices';
import BookValidator from './bookValidator';

class BookController {

  router: Router = Router();

  async get(req: Request, res: Response): Promise<any> {
    try {
      const data = await BookService.get();

      res.status(httpStatus.OK).send(data);
    } catch (error) {
      res.status(httpStatus.OK).send({ message: 'Failed to list Books' });
    }
  }

  async getByAuthor(req: Request, res: Response): Promise<any> {
    try {
      const { params } = req;

      const data = await BookService.getByAuthor(params.author);

      console.log(params.author)

      res.status(httpStatus.OK).send(data);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({ message: 'Failed to list Books' });
    }
  }

  async getByGenre(req: Request, res: Response): Promise<any> {
    try {
      const { params } = req;

      const data = await BookService.getByGenre(params.genre);

      res.status(httpStatus.OK).send(data);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({ message: 'Failed to list Books' });
    }
  }

  async post(req: Request, res: Response): Promise<any> {
    try {
      const { body } = req;

      const bookValidator = new BookValidator();

      if (!bookValidator.isBookValid(body)) {
        res.status(httpStatus.BAD_REQUEST).send({ errors: bookValidator.getErrors() });
        return
      }

      const response = await BookService.post(body);

      res.status(httpStatus.CREATED).send({ data: response });
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({ message: 'Failed to register Book' });
    }
  }

  async put(req: Request, res: Response): Promise<any> {
    try {
      const { body, params } = req;

      const id = params.id || body.id;

      const bookValidator = new BookValidator();

      if (!bookValidator.isBookValid(body)) {
        res.status(httpStatus.BAD_REQUEST).send({ errors: bookValidator.getErrors() });
        return
      }

      const response = await BookService.put(id, body);

      res.status(httpStatus.OK).send({ data: response });
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({ message: 'Failed to update Book' });
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    try {
      const { body, params } = req;

      const id = params.id || body.id;

      const response = await BookService.delete(id);

      res.status(httpStatus.OK).send({ data: response });
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({ message: 'Failed to delete Book' });
    }
  }

  routesMapping(): Router {
    this.router.get('/', this.get);

    this.router.get('/:author', this.getByAuthor);

    this.router.get('/genero/:genre', this.getByGenre);

    this.router.post('/', this.post)

    this.router.put('/:id', this.put)

    this.router.delete('/:id', this.delete)

    return this.router;
  }
}

export default new BookController();