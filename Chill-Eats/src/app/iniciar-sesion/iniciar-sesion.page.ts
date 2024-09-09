import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  constructor(private navController: NavController) { }

  segment: string = 'login'; 
  email: string = '';
  password: string = '';
  registerName: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  registerConfirmPassword: string = '';
  nombre: string = '';
  phone: string = '';
  address: string = '';
  users = [
    { 
      email: 'ejemplo@ejemplo.com',
      password: '1234',
      fullName: 'Mario',
      phone: '1234567890',
      address: 'Some Street' 
    }
  ];

  ngOnInit() {}

  switchToLogin(event: Event) {
    event.preventDefault(); 
    this.segment = 'login';
  }

  switchToRegister(event: Event) {
    event.preventDefault(); 
    this.segment = 'register';
  }

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          address: user.address
        }
      };
      this.navController.navigateForward(['/home'], navigationExtras);
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  }

  register() {
    if (this.registerPassword !== this.registerConfirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.segment = 'login';
  }
}
