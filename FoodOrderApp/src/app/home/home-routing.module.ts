import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',component:ContentComponent ,pathMatch:'full'},
  {
    path: 'login' ,component:LoginComponent ,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
