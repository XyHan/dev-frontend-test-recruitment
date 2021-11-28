import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
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
