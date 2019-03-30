import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';

class DataBase {
  private DB_URL: string = 'mongodb://guilherme11gr:guilherme11gr@ds147965.mlab.com:47965/node-typescript';

  createConnection(): void {
    mongoose.connect(this.DB_URL, { useNewUrlParser: true }, err => ( err ? this.onErrorLog(err) : this.onSuccess()));
  }

  onErrorLog(err: MongoError): void {
    console.error('\n\nError to connect: \n\n', err);
  }

  onSuccess(): void {
    console.log(`\n\tConnected to \x1b[36m${this.DB_URL}\x1b[0m`);
  }

}

export default DataBase;