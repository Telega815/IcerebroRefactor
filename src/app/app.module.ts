import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    pathMatch: 'full'
  // },
  // {
  //   path: 'service/signin',
  //   component: SignInPageComponent
  // },
  // {
  //   path: 'service/registration',
  //   component: RegistrationPageComponent,
  // },
  // {
  //   path: ':user',
  //   component: FeedPageComponent,
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
