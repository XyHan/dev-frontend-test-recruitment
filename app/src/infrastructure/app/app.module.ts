import { NgModule } from '@angular/core';
import { ThemeManager } from './manager/theme.manager';

@NgModule({
  providers: [ThemeManager],
  exports: []
})
export class AppModule { }
