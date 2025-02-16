import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Usuario } from '../models/usuario';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
     MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule
  ]
})
export class CadastroComponent {
  private userService = inject(UserService);
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  cadastrar(): void {
    if (this.cadastroForm.valid) {
      const usuario: Usuario = this.cadastroForm.value as Usuario;
      this.userService.cadastrarUsuario(usuario).subscribe(
        (response: any) => {
          alert('Usuario Cadastrado com sucesso!');
        },
        (error: any) => {
          console.error('Erro ao buscar usuário:', error);
        }
      );
     
      console.log('Cadastro realizado!', this.cadastroForm.value);
      this.router.navigate(['/login']); // Redireciona para o login após o cadastro
    }
  }

  navegarParaLogin(): void {
    this.router.navigate(['/login']);
  }
}
