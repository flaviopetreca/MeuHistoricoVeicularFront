import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


@Injectable({
 providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:44343/api'; // Substitua pelo URL da sua API

  constructor( private router: Router  ) {}

  // Método para realizar login
  login(usuarioCpfOuCelular: string, senha: string): Observable<any> {
    console.log('login inicializado');
    const loginDto = { usuarioCpfOuCelular : usuarioCpfOuCelular, senha : senha };
    return this.http.post(`${this.apiUrl}/UsuarioAutenticacao/login`, loginDto, {withCredentials: true,});
  }

  logout() {
    document.cookie = 'AuthToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // Apaga o cookie
    this.router.navigate(['/login']); // Redireciona para login
    return this.http.post(`${this.apiUrl}/UsuarioAutenticacao/logout`, {withCredentials: true,});
  }

  isAuthenticated(): boolean {
    console.log(document.cookie.includes('AuthToken'))
    return document.cookie.includes('AuthToken'); // Verifica se o cookie existe
  }

  // getUsuarioCpfOuCelularFromToken(): string | null {
  //   const token = this.getToken(); // Método que retorna o token salvo
  //   console.log('token '+ token);
  //   if (!token) return null;
  
  //   const decodedToken: any = jwtDecode(token);
  //   return decodedToken?.sub || null; // O sub contém o nome do usuário
  // }
  
  // getToken(): string | null {
  //   console.log('document.cookie: ' + document.cookie)
  //   return document.cookie
  //     .split('; ')
  //     .find(row => row.startsWith('AuthToken='))
  //     ?.split('=')[1] || null;
  // }
}
