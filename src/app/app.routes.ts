import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Rota para a página de login
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para login por padrão
  // { path: '**', redirectTo: '/login' }, // Wildcard para rotas não definidas
  { path: 'UserHome', component: UserHomeComponent } // Wildcard para rotas não definidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
