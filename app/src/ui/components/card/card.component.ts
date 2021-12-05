import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  public header: string | undefined;

  @Input()
  public footer: string | undefined;

  @Input()
  public title: string | undefined;

  @Input()
  public content: string | undefined | null;

  @Input()
  public media: string | undefined;

  @Input()
  public durationMin: number;

  @Input()
  public durationSec: number;

  constructor() {
    this.header = 'Genre of the music';
    this.footer = 'Title lorem ipsum';
    this.title = 'Title lorem ipsum';
    this.content = 'Description of the music';
    this.media = './assets/img/card-default.jpg';
    this.durationMin = 0;
    this.durationSec = 0;
  }
}
