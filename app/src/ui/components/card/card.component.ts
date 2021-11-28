import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  public header: string;

  @Input()
  public footer: string;

  @Input()
  public title: string;

  @Input()
  public content: string;

  @Input()
  public media: string;

  @Input()
  public link: string;

  constructor() {
    this.header = 'Genre of the music';
    this.footer = 'Title lorem ipsum';
    this.title = 'Title lorem ipsum';
    this.content = 'Description of the music';
    this.media = './assets/img/card-default.jpg';
    this.link = '/musics';
  }
}
