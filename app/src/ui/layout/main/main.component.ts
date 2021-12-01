import { Component, Inject } from '@angular/core';
import { MenuService } from '../../../infrastructure/app/service/menu.service';
import { MenuServiceInterface } from '../../../domain/app/service/menu.service.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private _menuService: MenuServiceInterface;

  constructor(@Inject(MenuService) menuService: MenuServiceInterface) {
    this._menuService = menuService;
  }

  public displayMenu(): void {
    this._menuService.displayMenu();
  }
}
