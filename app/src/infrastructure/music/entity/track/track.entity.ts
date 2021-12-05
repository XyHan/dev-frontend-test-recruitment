import { TrackModel } from '../../../../domain/music/model/track/track.model';
import { Expose } from 'class-transformer';

export class TrackEntity extends TrackModel {
  override get description(): string | null | undefined {
    return this._description;
  }

  override get duration(): number | undefined {
    return this._duration;
  }

  override get genre(): string | undefined {
    return this._genre;
  }

  override get title(): string | undefined {
    return this._title;
  }

  override get media(): string | undefined {
    return this._media;
  }

  @Expose()
  override set description(value: string | null | undefined) {
    this._description = value;
  }

  @Expose()
  override set duration(value: number | undefined) {
    this._duration = value;
  }

  @Expose()
  override set genre(value: string | undefined) {
    this._genre = value;
  }

  @Expose()
  override set title(value: string | undefined) {
    this._title = value;
  }

  @Expose()
  override set media(value: string | undefined) {
    this._media = value;
  }
}
