import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly _titleAbove: string;
  private readonly _titleBelow: string;
  private readonly _logoPath: string;
  private readonly _buttonTitle: string;
  private readonly _buttonIcon: string;
  private readonly _buttonClass: string;

  constructor() {
    this._titleAbove = 'Bienvenue sur ORIGAMI ! Connectez-vous en cliquant ci-dessous à l\'aide de votre compte interne.';
    this._titleBelow = 'Pour plus de renseignement contactez votre administrateur.';
    this._logoPath = './assets/logo/logo-leadersleague.png';
    this._buttonTitle = 'Connexion';
    this._buttonIcon = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 0.292921C22.0976 0.683445 22.0976 1.31661 21.7071 1.70713L10.7071 12.7071C10.3166 13.0977 9.68342 13.0977 9.2929 12.7071C8.90237 12.3166 8.90237 11.6834 9.2929 11.2929L20.2929 0.292921C20.6834 -0.0976032 21.3166 -0.0976032 21.7071 0.292921Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 0.292921C21.9787 0.564559 22.0708 0.967791 21.9439 1.33038L14.9439 21.3304C14.8084 21.7174 14.4504 21.9825 14.0408 21.9992C13.6311 22.0159 13.2527 21.7808 13.0862 21.4062L9.2424 12.7576L0.593867 8.91384C0.219186 8.74731 -0.0158775 8.36894 0.000836285 7.95926C0.0175501 7.54959 0.282654 7.19162 0.669655 7.05617L20.6697 0.0561695C21.0322 -0.0707359 21.4355 0.0212832 21.7071 0.292921ZM3.71108 8.11063L10.4061 11.0862C10.6324 11.1868 10.8133 11.3677 10.9138 11.5939L13.8894 18.289L19.37 2.63L3.71108 8.11063Z" fill="white"/></svg>';
    this._buttonClass = 'primary';
  }

  get titleAbove(): string {
    return this._titleAbove;
  }

  get titleBelow(): string {
    return this._titleBelow;
  }

  get logoPath(): string {
    return this._logoPath;
  }

  get buttonTitle(): string {
    return this._buttonTitle;
  }

  get buttonIcon(): string {
    return this._buttonIcon;
  }

  get buttonClass(): string {
    return this._buttonClass;
  }
}