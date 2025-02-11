import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Usuário autenticado, pode acessar a rota
    } else {
      this.router.navigate(['/login']); // Redireciona para a tela de login
      return false; // Bloqueia o acesso à rota
    }
  }
}
