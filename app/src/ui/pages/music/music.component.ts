import { Component, Inject, OnInit } from '@angular/core';
import { MusicServiceInterface } from '../../../domain/music/service/music.service.interface';
import { MusicService } from '../../../infrastructure/music/service/music.service';
import { PaginatedListInterface } from '../../../domain/shared/model/paginated-list.model';
import { TrackModelView } from '../../../infrastructure/music/model-view/track.model-view';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  private readonly _musicsAmount: number;
  private readonly _musicsDownloadable: number;
  private readonly _musicService: MusicServiceInterface;
  private _tracks: TrackModelView[];

  constructor(@Inject(MusicService) musicService: MusicServiceInterface) {
    this._musicsAmount = 1420;
    this._musicsDownloadable = 288;
    this._musicService = musicService;
    this._tracks = [];
  }

  ngOnInit() {
    this.listAllTracks();
  }

  private listAllTracks(): void {
    this._musicService
      .listAllPaginated(1, 6)
      .subscribe((paginatedTracks: PaginatedListInterface) => {
        this._tracks = paginatedTracks.items;
      });
  }

  get musicsAmount(): number {
    return this._musicsAmount;
  }

  get musicsDownloadable(): number {
    return this._musicsDownloadable;
  }

  get tracks(): TrackModelView[] {
    return this._tracks;
  }
}
