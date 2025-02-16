import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  imports: [CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  private userService = inject(UserService);
  private authService = inject(AuthService);
  user = {
    name: ''
  };
  isEditing = false;

   constructor( private router: Router) {
    }

  ngOnInit(): void {
    this.buscarUsuario();
  }


  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    this.isEditing = false;
    alert('Dados salvos com sucesso!');
  }

  buscarUsuario(): void {
    const usuarioCpfOuCelular = localStorage.getItem('usuarioCpfOuCelular');
    if(usuarioCpfOuCelular){
    this.userService.buscarUsuario(usuarioCpfOuCelular).subscribe(
      (response: any) => {
        this.user.name = response.nomeUsuario;
      },
      (error: any) => {
        console.error('Erro ao buscar usuário:', error);
      }
    );}
  }

  logout(): void {
    // Limpar o localStorage ou qualquer dado de sessão
    localStorage.removeItem('usuarioCpfOuCelular'); // Exemplo de remoção do item no localStorage
    this.authService.logout() 
    // Redirecionar para a tela de login
    this.router.navigate(['/login']);
  }

}
