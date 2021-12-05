import { MusicServiceInterface } from '../../../domain/music/service/music.service.interface';
import { Inject, Injectable } from '@angular/core';
import { MusicQueryRepositoryInterface } from '../../../domain/music/repository/music.query.repository.interface';
import { MusicQueryRepository } from '../repository/music.query.repository';
import { catchError, map, Observable } from 'rxjs';
import { TrackInterface } from '../../../domain/music/model/track/track.model';
import { MusicServiceException } from './music.service.exception';
import { PaginatedListInterface } from '../../../domain/shared/model/paginated-list.model';
import { Paginator } from '../../shared/paginator';
import {TrackModelView} from "../model-view/track.model-view";


@Injectable()
export class MusicService implements MusicServiceInterface {
  private readonly _musicRepository: MusicQueryRepositoryInterface;
  private readonly _paginator: Paginator;

  constructor(
    @Inject(MusicQueryRepository) musicRepository: MusicQueryRepositoryInterface,
    @Inject(Paginator) paginator: Paginator,
  ) {
    this._musicRepository = musicRepository;
    this._paginator = paginator;
  }

  public listAllPaginated(page: number, size: number): Observable<PaginatedListInterface> {
    return this._musicRepository
      .listAll()
      .pipe(
        map((tracks: TrackInterface[]) => {
          const items = tracks.map((track: TrackInterface) => new TrackModelView(track));
          return this._paginator.paginate<TrackModelView>(page, size, items);
        }),
        catchError((error) => { throw new MusicServiceException(`MusicQueryRepository - listAllPaginated - ${error.message}`); })
      );
  }
}
