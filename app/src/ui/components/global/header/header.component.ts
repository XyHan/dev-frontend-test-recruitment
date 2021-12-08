import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeManager } from '../../../../infrastructure/app/manager/theme.manager';
import { ThemeManagerInterface, ThemeType } from '../../../../domain/app/manager/theme.manager.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private readonly _isHome: boolean;
  private readonly _url: string;
  private readonly _breadcrumb: { title: string, url: string }[];
  private readonly _sunIconPath: string;
  private readonly _moonIconPath: string;
  private readonly _themeManager: ThemeManagerInterface;
  private _currentTheme: ThemeType | null;

  constructor(
    @Inject(Router) router: Router,
    @Inject(ThemeManager) themeManager: ThemeManagerInterface
  ) {
    this._isHome = ['', '/', '/home'].includes(router.url);
    this._url = router.url;
    this._breadcrumb = [
      { title: 'Home', url: '/' },
      { title: 'Musics', url: '/musics' }
    ]
    this._sunIconPath = './assets/icon/sun.svg';
    this._moonIconPath = './assets/icon/moon.svg';
    this._themeManager = themeManager;
    this._currentTheme = null;
  }

  ngOnInit(): void {
    this._themeManager.theme.subscribe(
      (theme: ThemeType) => this._currentTheme = theme
    );
  }

  switchTheme(): void {
    const currentTheme = this._currentTheme === 'light' ? 'dark' : 'light';
    const body = (document.querySelector('body') as HTMLElement);
    body.setAttribute('data-theme', currentTheme);
    this._themeManager.setTheme(body, currentTheme);
  }

  get isHome(): boolean {
    return this._isHome;
  }

  get breadcrumb(): { title: string; url: string }[] {
    return this._breadcrumb;
  }

  get currentTheme(): ThemeType | null {
    return this._currentTheme;
  }

  get themeManager(): ThemeManagerInterface {
    return this._themeManager;
  }
}
