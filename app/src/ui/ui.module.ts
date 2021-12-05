import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { AppModule } from '../infrastructure/app/app.module';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MusicComponent } from './pages/music/music.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './layout/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../infrastructure/shared/shared.module';
import { MusicModule } from '../infrastructure/music/music.module';

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
    CardComponent
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
