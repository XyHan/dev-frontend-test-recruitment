import { ArtworkModel } from '../../../../domain/music/model/track/artwork.model';
import { Expose } from 'class-transformer';

export class ArtworkEntity extends ArtworkModel {
  @Expose({ name: 'media' })
  override '150x150': string;
}
