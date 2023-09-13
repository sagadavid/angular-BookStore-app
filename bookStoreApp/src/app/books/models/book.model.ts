import { PriceModel } from './price.model';

export class BookModel {
  public id: number;
  public title: string;
  public totalPages: number;
  private _author: string;
  public price: PriceModel;

  public set skribent(authorName: string) {
    this._author = ' skribent ' + authorName;
  }
  public get skribent() {
    return this._author;
  }
}
