import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SingupComponent } from './components/auth/singup/singup.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';




const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'noticias', component: NoticiasComponent },
{ path: 'singup', component: SingupComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
