import { TrackInterface } from '../../../domain/music/model/track/track.model';

export class TrackModelView {
  private readonly _description: string | null | undefined;
  private readonly _genre: string | undefined;
  private readonly _title: string | undefined;
  private readonly _media: string | undefined;
  private readonly _durationMin: number;
  private readonly _durationSec: number;

  constructor(track: TrackInterface) {
    this._description = track.description;
    this._genre = track.genre;
    this._title = track.title;
    this._media = track.media;
    this._durationMin = this.getDurationMinutes(track.duration);
    this._durationSec = this.getDurationSeconds(track.duration);
  }

  get description(): string | null | undefined {
    return this._description;
  }

  get genre(): string | undefined {
    return this._genre;
  }

  get title(): string | undefined {
    return this._title;
  }

  get media(): string | undefined {
    return this._media;
  }

  get durationMin(): number {
    return this._durationMin;
  }

  get durationSec(): number {
    return this._durationSec;
  }

  private getDurationMinutes(duration: number | undefined): number {
    return duration ? Math.floor(duration / 60) : 0;
  }

  private getDurationSeconds(duration: number | undefined): number {
    return duration && this._durationMin ? duration - this._durationMin * 60 : 0;
  }
}
