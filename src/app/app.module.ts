import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';

import { FooterComponent } from './footer/footer.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    LoginComponent,
    FooterComponent,
    SlidenavComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'home',component:SlidenavComponent},
  {path:'login',component:LoginComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
