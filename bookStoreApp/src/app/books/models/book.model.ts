import { AuthorModel } from 'src/app/shared/model/author.model';
import { PriceModel } from './price.model';
import { AuhtorModel } from './author.model';

export class BookModel {
  public id: number;
  public title: string;
  public totalPages: number;
  public author: string;
  public price: PriceModel;
  public isPublished: boolean;
  public publishedOn: Date;
  public authors: AuhtorModel[];
}
