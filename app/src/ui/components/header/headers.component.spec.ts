import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have isHome as true`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.isHome).toBeTruthy();
  });

  it(`should have musicsAmount as 1420`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.musicsAmount).toEqual(1420);
  });

  it(`should have musicsDownloadable as 288`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.musicsDownloadable).toEqual(288);
  });

  it('should render musics amounts', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section span:first-child')?.textContent).toContain(1420);
    expect(compiled.querySelector('section span:last-child')?.textContent).toContain(288);
  });

  it('should render breadcrumb', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul:first-child')?.textContent).toContain('Home');
    expect(compiled.querySelector('ul:nth-child(2)')).toBeNull();
  });
});
