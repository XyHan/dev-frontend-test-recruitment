import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly _isHome: boolean;
  private readonly _url: string;
  private readonly _musicsAmount: number;
  private readonly _musicsDownloadable: number;
  private readonly _breadcrumb: { title: string, url: string }[];

  constructor(@Inject(Router) router: Router) {
    this._isHome = ['', '/', '/home'].includes(router.url);
    this._url = router.url;
    this._musicsAmount = 1420;
    this._musicsDownloadable = 288;
    this._breadcrumb = [
      { title: 'Home', url: '/' },
      { title: 'Musics', url: '/musics' }
    ]
  }

  get isHome(): boolean {
    return this._isHome;
  }

  get musicsAmount(): number {
    return this._musicsAmount;
  }

  get musicsDownloadable(): number {
    return this._musicsDownloadable;
  }

  get breadcrumb(): { title: string; url: string }[] {
    return this._breadcrumb;
  }
}
