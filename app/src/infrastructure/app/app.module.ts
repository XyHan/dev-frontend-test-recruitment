import { NgModule } from '@angular/core';
import { ThemeManager } from './manager/theme.manager';
import { MenuService } from './service/menu.service';

@NgModule({
  providers: [ThemeManager, MenuService],
  exports: []
})
export class AppModule { }
