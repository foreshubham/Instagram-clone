import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component: LoginPageComponent
  },
  {
    path:"signup",
    component: SignupPageComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"card",
    component: CardComponent
  },
  {
    path:"search",
    component: SearchComponent
  },
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"side",
    component: SidenavComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
