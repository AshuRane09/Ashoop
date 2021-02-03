import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn: boolean = false;
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  async signIn(email: string, password: string) {
    try {
      await this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(res.user));
        });
    } catch (e) {
      this.isLoggedIn = false;
    }
  }

  async signUp(email: string, password: string) {
    try {
      await this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(res.user));
        });
    } catch (e) {
      this.isLoggedIn = false;
    }
  }

  async loginWithGoogle() {
    try {
      await this.afAuth
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        .then((res) => {
          this.isLoggedIn = true;
        });
    } catch (e) {
      this.isLoggedIn = false;
    }
  }

  SignOut() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
    });
  }
}
