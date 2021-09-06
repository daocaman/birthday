import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftComponent } from './gift/gift.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'gift',
    component: GiftComponent
  },
  {
    path: 'guest',
    component: GuestComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
