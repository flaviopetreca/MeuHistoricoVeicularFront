import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:29639/api'; // Substitua pelo URL da sua API

  constructor(
    
  ) {}
  // constructor(private http: HttpClient) {}


  // login(usuarioCpfOuCelular: string, senha: string){
  //   console.log("gdfgf");
  // }

  // Método para realizar login
  login(usuarioCpfOuCelular: string, senha: string): Observable<any> {
    console.log('AuthService2 inicializado');
    const loginDto = { usuarioCpfOuCelular : usuarioCpfOuCelular, senha : senha };
    return this.http.post(`${this.apiUrl}/UsuarioAutenticacao/login`, loginDto);
  }

  // Método para buscar informações do usuário (com autenticação)
  buscarUsuario(usuarioCpfOuCelular: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/UsuarioAutenticacao/buscar`, { 
      headers,
      params: { usuarioCpfOuCelular }
    });
  }
}
