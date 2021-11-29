import { Component, Inject, OnInit } from '@angular/core';
import { ThemeManagerInterface, ThemeType } from '../../../domain/manager/theme.manager.interface';
import { ThemeManager } from '../../../infrastructure/app/manager/theme.manager';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private readonly _themeManager: ThemeManagerInterface;
  private _currentTheme: ThemeType | null;

  constructor(@Inject(ThemeManager) themeManager: ThemeManagerInterface) {
    this._themeManager = themeManager;
    this._currentTheme = 'light';
  }

  ngOnInit(): void {
    this._themeManager.theme.subscribe(
      (theme: ThemeType) => this._currentTheme = theme
    );
  }

  get currentTheme(): string | null {
    return this._currentTheme;
  }
}
