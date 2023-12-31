import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //forChild ---> es un modulo hijo
  exports: [RouterModule]
})
export class HomeRoutingModule { }
