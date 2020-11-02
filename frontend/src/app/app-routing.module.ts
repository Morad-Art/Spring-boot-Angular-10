import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { LoginComponent } from './components/login/login.component';
import { PersonComponent } from './components/person/person.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'login',component:LoginComponent},
  {path:'home',component:PersonComponent,canActivate:[AuthGuard]},
  {path:'add',component:AddPersonComponent,canActivate:[AuthGuard]},
  {path:'edit/:id',component:EditPersonComponent,canActivate:[AuthGuard]},
  {path:'search/:motcle',component:SearchComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
