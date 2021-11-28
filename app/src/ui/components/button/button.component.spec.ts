import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from './button.component';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ButtonComponent
      ],
    }).compileComponents();
  });

  it('should create the button', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MyButton'`, () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MyButton');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('MyButton');
  });
});
