import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {
  private readonly _musicsAmount: number;
  private readonly _musicsDownloadable: number;

  constructor() {
    this._musicsAmount = 1420;
    this._musicsDownloadable = 288;
  }
  get musicsAmount(): number {
    return this._musicsAmount;
  }

  get musicsDownloadable(): number {
    return this._musicsDownloadable;
  }
}
