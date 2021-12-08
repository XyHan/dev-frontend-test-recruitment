import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { AppModule } from '../infrastructure/app/app.module';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MusicComponent } from './pages/music/music.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/global/menu/menu.component';
import { AppComponent } from './layout/app/app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../infrastructure/shared/shared.module';
import { MusicModule } from '../infrastructure/music/music.module';
import { ErrorComponent } from './components/global/error/error.component';
import { FilterComponent } from './components/music/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    MusicComponent,
    ButtonComponent,
    MenuComponent,
    HeaderComponent,
    CardComponent,
    ErrorComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    AppModule,
    SharedModule,
    MusicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class UiModule { }
