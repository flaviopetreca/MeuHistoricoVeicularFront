import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  user = {
    name: 'João Silva',
    email: 'joao@email.com'
  };
  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    this.isEditing = false;
    alert('Dados salvos com sucesso!');
  }
}
