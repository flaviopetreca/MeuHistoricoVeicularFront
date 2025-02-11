import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
    standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private authService = inject(AuthService);
  token: string = '';
  loginForm: FormGroup;
  usuarioCpfOuCelular: string = '';
  senha: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    this.usuarioCpfOuCelular = this.loginForm.get('identifier')?.value;
    const senha = this.loginForm.get('password');
    
    if(this.usuarioCpfOuCelular && senha)
    
      this.authService.login(this.usuarioCpfOuCelular, senha.value) 

     .subscribe((response: { token: string; }) => {
      localStorage.setItem('usuarioCpfOuCelular', this.usuarioCpfOuCelular);
        console.log('Login bem-sucedido:', response);
        this.router.navigate(['/UserHome']);
      },
      (error: any) => 
        this.authService.logout() 
       
    );
  }
}
