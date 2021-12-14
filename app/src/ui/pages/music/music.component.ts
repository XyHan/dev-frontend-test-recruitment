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
  private _error: Error | undefined;
  private _loading: boolean;

  constructor(@Inject(MusicService) musicService: MusicServiceInterface) {
    this._musicsAmount = 1420;
    this._musicsDownloadable = 288;
    this._musicService = musicService;
    this._tracks = [];
    this._loading = true;
  }

  ngOnInit() {
    this._musicService
      .search
      .subscribe(
        (search: string) => {
          this._loading = true;
          this.listAllTracks(search);
        },
        (error: any) => {
          console.error('MusicComponent listallTracks', error.message);
          this._error = new Error(`Error: Impossible de récupérer les tracks`);
        },
      );
  }

  private listAllTracks(search: string): void {
    this._musicService
      .listAllPaginated(1, 6, search)
      .subscribe(
        (paginatedTracks: PaginatedListInterface) => {
          this._tracks = paginatedTracks.items;
          this._loading = false;
        },
        (error: any) => {
          console.error('MusicComponent listallTracks', error.message);
          this._error = new Error(`Error: Impossible de récupérer les tracks`);
        },
      );
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

  get error(): Error | undefined {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }
}
