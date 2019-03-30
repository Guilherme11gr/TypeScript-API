import { prop, Typegoose, arrayProp } from 'typegoose';

class Book extends Typegoose {

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  description: string;

  @prop({ required: true })
  author: string;

  @arrayProp({ items: String })
  genre: string[];

  @prop({ default: Date.now() })
  date: Date

}

export default Book;
