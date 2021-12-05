export interface PaginatedListInterface {
  page: number,
  pages: number,
  size: number,
  total: number,
  items: any[]
}

export class PaginatedListModel implements PaginatedListInterface {
  private _items: any[];
  private _page: number;
  private _pages: number;
  private _size: number;
  private _total: number;

  constructor(items: any[], page: number, pages: number, size: number, total: number) {
    this._items = items;
    this._page = page;
    this._pages = pages;
    this._size = size;
    this._total = total;
  }

  get items(): any[] {
    return this._items;
  }

  set items(value: any[]) {
    this._items = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get pages(): number {
    return this._pages;
  }

  set pages(value: number) {
    this._pages = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }
}
