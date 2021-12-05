import { NgModule } from '@angular/core';
import { MusicQueryRepository } from './repository/music.query.repository';
import { MusicService } from './service/music.service';

@NgModule({
  providers: [MusicQueryRepository, MusicService],
})
export class MusicModule {}
