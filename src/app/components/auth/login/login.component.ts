import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UsuarioI } from '../../../models/usuario.interface';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServ: AuthService, private route: Router) { }
  public showError1: any;
  public showError2: any;
  public showError3: any;


  loginForms = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  ngOnInit(): void {

  }
  onLogin(form: UsuarioI) {
    this.showError1 = false
    this.showError2 = false
    this.showError3 = false

    this.authServ.
      loginbyEmail(form)
      .then(res => {
          localStorage.setItem('email', this.loginForms.get('email').value);
        this.route.navigate(['/noticias']);

      })
      .catch(err => {
        if (err.code == "auth/invalid-email") {
          this.showError1 = true;
          this.loginForms.get('email').setErrors({ 'Email Incorrecto': true })
        }
        else if (err.code == "auth/user-not-found") {
          this.showError2 = true;
          this.loginForms.get('email').setErrors({ 'email no registrado': true })
        }
        else if (err.code == "auth/wrong-password") {
          this.showError3 = true;
          this.loginForms.get('password').setErrors({ 'password incorrecto': true })
        };
      }
      )
  }
  gotoSingup() {
    this.route.navigate(['/singup'])
  };

}
