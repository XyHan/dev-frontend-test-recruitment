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
    this._buttonIcon = './assets/icon/fly.svg';
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
