import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError, timeout } from 'rxjs';
import { TrackInterface } from '../../../domain/music/model/track/track.model';
import { MusicQueryRepositoryException } from './music.query.repository.exception';
import { MusicQueryRepositoryInterface } from '../../../domain/music/repository/music.query.repository.interface';
import { plainToClass } from 'class-transformer';
import { TrackEntity } from '../entity/track/track.entity';
import { environment } from '../../../environments/environment';

@Injectable()
export class MusicQueryRepository implements MusicQueryRepositoryInterface {
  private readonly _httpClient: HttpClient;
  private readonly _baseUrl: string;

  constructor(@Inject(HttpClient) httpClient: HttpClient) {
    this._httpClient = httpClient;
    this._baseUrl = environment.audius.baseUrl;
  }

  public listAll(search: string): Observable<TrackInterface[]> {
    return this._httpClient
      .get<TrackInterface[]>(`${this._baseUrl}/search?query=${search}&app_name=EXAMPLEAPP`)
      .pipe(
        timeout({
          each: 5000,
          with: () => throwError(new MusicQueryRepositoryException('Cannot retrieve tracks - timeout'))
        }),
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
        catchError((error) => {
          console.error('MusicQueryRepository - listAll', error.message);
          throw new MusicQueryRepositoryException(`MusicQueryRepository - listAll - ${error.message}`);
        })
      );
  }
}
