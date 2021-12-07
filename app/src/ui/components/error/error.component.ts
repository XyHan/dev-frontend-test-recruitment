import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input()
  public message: string | undefined;

  @Input()
  public code: number | undefined;

  constructor() {
    this.message = 'Error !';
    this.code = 500;
  }
}
