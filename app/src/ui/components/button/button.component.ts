import {Component, Inject, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public title: string;

  @Input()
  public icon: string;

  @Input()
  public class: string;

  private _router: Router;

  constructor(@Inject(Router) router: Router) {
    this._router = router;
    this.title = 'MyButton';
    this.icon = `
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 0.292921C22.0976 0.683445 22.0976 1.31661 21.7071 1.70713L10.7071 12.7071C10.3166 13.0977 9.68342 13.0977 9.2929 12.7071C8.90237 12.3166 8.90237 11.6834 9.2929 11.2929L20.2929 0.292921C20.6834 -0.0976032 21.3166 -0.0976032 21.7071 0.292921Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 0.292921C21.9787 0.564559 22.0708 0.967791 21.9439 1.33038L14.9439 21.3304C14.8084 21.7174 14.4504 21.9825 14.0408 21.9992C13.6311 22.0159 13.2527 21.7808 13.0862 21.4062L9.2424 12.7576L0.593867 8.91384C0.219186 8.74731 -0.0158775 8.36894 0.000836285 7.95926C0.0175501 7.54959 0.282654 7.19162 0.669655 7.05617L20.6697 0.0561695C21.0322 -0.0707359 21.4355 0.0212832 21.7071 0.292921ZM3.71108 8.11063L10.4061 11.0862C10.6324 11.1868 10.8133 11.3677 10.9138 11.5939L13.8894 18.289L19.37 2.63L3.71108 8.11063Z" fill="white"/>
      </svg>
    `;
    this.class = 'primary';
  }

  ngAfterViewInit() {
    const iconEl = (document.querySelector('button .icon') as HTMLElement);
    iconEl.innerHTML = this.icon;
  }

  async onClick(): Promise<void> {
    await this._router.navigate(['']);
  }
}
