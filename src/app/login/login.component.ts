import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule, MatCardSubtitle
} from "@angular/material/card";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardSubtitle,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatButton,
    FormsModule,
    MatFormField,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CommonModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showResetPasswordCard: boolean = false;

  onSubmit() {
    // para validar el login
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);

    // Mostrar  cambiar contraseña
    this.showResetPasswordCard = true;
  }

  onResetPassword() {
    //   lógica para reset de contraseña
    console.log('Correo electrónico para reset:', this.email);

    //  ocultar el card de cambiar contraseña
    this.showResetPasswordCard = false;
  }
}
