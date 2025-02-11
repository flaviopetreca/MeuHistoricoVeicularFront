import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-user-home',
  imports: [CommonModule, BrowserAnimationsModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  private userService = inject(UserService);
  user = {
    name: ''
  };
  isEditing = false;

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
}
