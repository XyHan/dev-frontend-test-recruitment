import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MusicComponent } from './music.component';
import { HeaderComponent } from '../../components/header/header.component';

describe('MusicComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MusicComponent,
        HeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MusicComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
