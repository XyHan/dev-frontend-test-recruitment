import { Component, Inject, OnInit } from '@angular/core';
import { MusicService } from '../../../../infrastructure/music/service/music.service';
import { MusicServiceInterface } from '../../../../domain/music/service/music.service.interface';

@Component({
  selector: 'app-music-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  private readonly _buttonTitle: string;
  private readonly _buttonIcon: string;
  private readonly _buttonClass: string;
  private readonly _musicService: MusicServiceInterface;

  constructor(@Inject(MusicService) musicService: MusicServiceInterface) {
    this._buttonTitle = 'Rechercher';
    this._buttonIcon = './assets/icon/fly.svg';
    this._buttonClass = 'primary search-btn';
    this._musicService = musicService;
  }

  ngOnInit() {
    this.fetch('baauer b2b');
  }

  fetch(value: string): void {
    value = value === '' ? 'baauer b2b' : value;
    this._musicService.search.next(value);
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
