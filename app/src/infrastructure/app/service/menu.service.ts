import { Injectable } from '@angular/core';
import { MenuServiceInterface } from '../../../domain/app/service/menu.service.interface';

@Injectable()
export class MenuService implements MenuServiceInterface {
  public displayMenu(): void {
    const mainNav = (document.querySelector('.main--nav') as HTMLElement);
    const mainNaveClasses: string | undefined = mainNav?.classList?.toString();

    const mainWrapper = (document.querySelector('.main--wrapper') as HTMLElement);
    const mainWrapperClasses: string | undefined = mainWrapper?.classList?.toString();

    if (mainNaveClasses && mainWrapperClasses) {
      mainNav.className = mainNaveClasses.includes('is-active') ? 'main--nav' : 'main--nav is-active';
      mainWrapper.className = mainWrapperClasses.includes('is-active') ? 'main--wrapper' : 'main--wrapper is-active';
    }
  }
}
