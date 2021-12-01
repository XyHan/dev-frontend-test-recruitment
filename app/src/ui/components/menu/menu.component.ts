import { Component, Inject } from '@angular/core';
import { MenuServiceInterface } from '../../../domain/app/service/menu.service.interface';
import { MenuService } from '../../../infrastructure/app/service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private _menuService: MenuServiceInterface;

  constructor(@Inject(MenuService) menuService: MenuServiceInterface) {
    this._menuService = menuService;
  }

  public displayMenu(): void {
    this._menuService.displayMenu();
  }
}
