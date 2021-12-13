import { Component } from '@angular/core';

@Component({
  selector: 'app-music-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  private readonly _buttonTitle: string;
  private readonly _buttonIcon: string;
  private readonly _buttonClass: string;

  constructor() {
    this._buttonTitle = 'Rechercher';
    this._buttonIcon = './assets/icon/fly.svg';
    this._buttonClass = 'primary search-btn';
  }

  search(): void {
    console.log('toto');
  }

  get buttonTitle(): string {
    return this._buttonTitle;
  }

  get buttonIcon(): string {
    return this._buttonIcon;
  }

  get buttonClass(): string {
    return this._buttonClass;
  }
}
