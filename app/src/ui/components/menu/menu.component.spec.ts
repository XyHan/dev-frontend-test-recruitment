import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render nav links', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('li:first-child span')?.textContent).toContain('Home');
    expect(compiled.querySelector('li:nth-child(2) span')?.textContent).toContain('Musics');
  });
});
