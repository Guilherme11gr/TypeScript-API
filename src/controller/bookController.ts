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
      res.status(httpStatus.OK).send(error.message);
    }
  }

  async getByAuthor(req: Request, res: Response): Promise<any> {
    try {
      const { params } = req;

      const data = await BookService.getByAuthor(params.author);

      console.log(params.author)

      res.status(httpStatus.OK).send(data);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({});
    }
  }

  async getByGenre(req: Request, res: Response): Promise<any> {
    try {
      const { params } = req;

      const data = await BookService.getByGenre(params.genre);

      res.status(httpStatus.OK).send(data);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({});
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
      res.status(httpStatus.BAD_REQUEST).send({error: 'error'});
    }
  }

  routesMapping(): Router {
    this.router.get('/', this.get);

    this.router.get('/:author', this.getByAuthor);

    this.router.get('/genero/:genre', this.getByGenre);

    this.router.post('/', this.post)

    return this.router;
  }
}

export default new BookController();