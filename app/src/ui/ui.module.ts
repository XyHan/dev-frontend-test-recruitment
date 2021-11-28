import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MusicComponent } from './pages/music/music.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './layout/app/app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    MusicComponent,
    ButtonComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class UiModule { }
