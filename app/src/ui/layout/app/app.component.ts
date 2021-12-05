import { Component, OnInit } from '@angular/core';
import { ThemeType } from '../../../domain/app/manager/theme.manager.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const body = (document.querySelector('body') as HTMLElement);
    if (body) body.setAttribute('data-theme', localStorage.getItem('theme') as ThemeType);
  }
}
