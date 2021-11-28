import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    DashboardComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class UiModule { }
