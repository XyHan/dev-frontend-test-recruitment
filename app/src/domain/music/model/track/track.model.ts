export interface TrackInterface {
  title: string | undefined;
  description: string | null | undefined;
  genre: string | undefined;
  duration: number | undefined;
  media: string | undefined;
}

export class TrackModel implements TrackInterface {
  protected _description: string | null | undefined;
  protected _duration: number | undefined;
  protected _genre: string | undefined;
  protected _title: string | undefined;
  protected _media: string | undefined;

  get description(): string | null | undefined {
    return this._description;
  }

  set description(value: string | null | undefined) {
    this._description = value;
  }

  get duration(): number | undefined {
    return this._duration;
  }

  set duration(value: number | undefined) {
    this._duration = value;
  }

  get genre(): string | undefined {
    return this._genre;
  }

  set genre(value: string | undefined) {
    this._genre = value;
  }

  get title(): string | undefined {
    return this._title;
  }

  set title(value: string | undefined) {
    this._title = value;
  }

  get media(): string | undefined {
    return this._media;
  }

  set media(value: string | undefined) {
    this._media = value;
  }
}
