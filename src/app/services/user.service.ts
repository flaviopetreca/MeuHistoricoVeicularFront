import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:44343/api'; // Substitua pelo URL da sua API

  constructor(
  ) {}
  
  buscarUsuario(usuarioCpfOuCelular: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/Usuario/buscar`, { 
       withCredentials: true,
      params: { usuarioCpfOuCelular }
    });
  }
}
