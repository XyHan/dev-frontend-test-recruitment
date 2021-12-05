import { Injectable } from '@angular/core';
import { PaginatedListInterface, PaginatedListModel } from '../../domain/shared/model/paginated-list.model';

@Injectable()
export class Paginator {
  public paginate<T>(page: number, size: number, items: T[]): PaginatedListInterface {
    const pages = Math.round(items.length / size);
    const paginatedItems = items.slice((page - 1) * size, page * size);
    return new PaginatedListModel(paginatedItems, page, pages, size, items.length);
  }
}
