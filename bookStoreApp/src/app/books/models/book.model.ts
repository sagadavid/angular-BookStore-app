import { PriceModel } from './price.model';

export class BookModel {
  public id: number;
  public title: string;
  public totalPages: number;
  public author: string;
  public price: PriceModel;
}
