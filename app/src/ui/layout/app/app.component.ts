import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const body = (document.querySelector('body') as HTMLElement);
    if (body) body.setAttribute('data-theme', 'light');
  }
}
