import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ButtonComponent } from '../../components/button/button.component';

describe('LoginComponent', () => {
  const titleAbove = 'Bienvenue sur ORIGAMI ! Connectez-vous en cliquant ci-dessous à l\'aide de votre compte interne.';
  const titleBelow = 'Pour plus de renseignement contactez votre administrateur.';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LoginComponent,
        ButtonComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as titleAbove`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.titleAbove).toEqual(titleAbove);
  });

  it(`should have as titleBelow`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.titleBelow).toEqual(titleBelow);
  });

  it('should render titles', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('figcaption span:first-child')?.textContent).toContain(titleAbove);
    expect(compiled.querySelector('figcaption span:last-child')?.textContent).toContain(titleBelow);
  });

  it('should have a connection button with title', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeDefined();
    expect(compiled.querySelector('button span')).toBeDefined();
  });
});
