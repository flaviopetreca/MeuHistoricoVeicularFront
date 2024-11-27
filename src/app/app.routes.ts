import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Rota inicial
  { path: '**', redirectTo: '' }           // Redireciona qualquer rota inválida para o Login
];
