import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { UsuarioI } from '../models/usuario.interface';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState
  }
  loginbyEmail(user: UsuarioI) {
    const { email, password } = user;
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
  }
  logout() {
    this.afAuth
      .auth
      .signOut();
  }
  registerUser(user: UsuarioI) {
    const { email, password } = user;
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
  }
}
