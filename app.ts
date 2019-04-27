import { Application, Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import DataBase from './bin/db';
import bookController from './src/controller/bookController';

class App {

  public app: Application;

  private db: DataBase;

  public teste: string;

  constructor() {
    this.app = express();

    this.db = new DataBase();

    this.db.createConnection();

    this.middler();

    this.routes();
  }

  middler(): void {
    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({ extended: false }));

    // Cors
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      next();
    });
  }

  routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send({ title: 'Node Books', version: '0.0.1' });
    });

    this.app.use('/api/v1/book', bookController.routesMapping());
  }
}

export default new App();