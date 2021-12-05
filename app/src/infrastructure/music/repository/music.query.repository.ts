import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { TrackInterface } from '../../../domain/music/model/track/track.model';
import { MusicQueryRepositoryException } from './music.query.repository.exception';
import { MusicQueryRepositoryInterface } from '../../../domain/music/repository/music.query.repository.interface';
import { plainToClass } from 'class-transformer';
import { TrackEntity } from '../entity/track/track.entity';

// Todo move to http client base config
export const BASE_URL = 'https://discoveryprovider.audius2.prod-us-west-2.staked.cloud/v1/tracks';

@Injectable()
export class MusicQueryRepository implements MusicQueryRepositoryInterface {
  private readonly _httpClient: HttpClient;

  constructor(@Inject(HttpClient) httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public listAll(): Observable<TrackInterface[]> {
    return this._httpClient
      .get<TrackInterface[]>(`${BASE_URL}/search?query=baauer b2b&app_name=EXAMPLEAPP`)
      .pipe(
        map((response: any) => {
          if (!response?.data) throw new MusicQueryRepositoryException(`MusicQueryRepository - listAll - no data`);
          return response.data.map((track: any) => {
            return plainToClass(
              TrackEntity,
              Object.assign({}, track, { media: track.artwork['150x150']} ),
              { strategy: 'excludeAll', excludeExtraneousValues: true })
            ;
          });
        }),
        catchError((error) => { throw new MusicQueryRepositoryException(`MusicQueryRepository - listAll - ${error.message}`); })
      );
  }
}
