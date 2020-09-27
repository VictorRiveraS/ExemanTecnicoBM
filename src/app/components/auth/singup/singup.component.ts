import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UsuarioI } from '../../../models/usuario.interface';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private authServ: AuthService, private route: Router) { }

  loginForms = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }
  onSingUp(form: UsuarioI) {
    this.authServ.registerUser(form);
    this.route.navigate(['/noticias']);
    localStorage.setItem('email', this.loginForms.get('email').value);
  }
  gotoLogin() {
    this.route.navigate(['/']);
  }
}

