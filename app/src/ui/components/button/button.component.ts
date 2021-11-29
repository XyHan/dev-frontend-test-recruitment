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
  public icon: string | null;

  @Input()
  public class: string;

  private _router: Router;

  constructor(@Inject(Router) router: Router) {
    this._router = router;
    this.title = 'MyButton';
    this.icon = null;
    this.class = 'primary';
  }

  ngAfterViewInit() {
    const iconEl = (document.querySelector('button .icon') as HTMLElement);
    if (iconEl && this.icon) iconEl.innerHTML = this.icon;
  }

  async onClick(): Promise<void> {
    await this._router.navigate(['']);
  }
}
