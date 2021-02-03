import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  isSignedIn: boolean = false;
  constructor(public firebaseService: FirebaseService) {}
  ngOnInit(): void {
    if (localStorage.getItem('user') != null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }

  async onSignUp(email: string, password: string) {
    await this.firebaseService.signUp(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      alert('Signed up');
    } else alert('Email or Password Incorrect');
  }

  async onSignIn(email: string, password: string) {
    await this.firebaseService.signIn(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      alert('signed In');
    } else alert('Email or Password Incorrect');
  }

  async onGoogleLogIn() {
    await this.firebaseService.loginWithGoogle();
  }

  async SignOut() {
    this.firebaseService.SignOut();
    if (!this.firebaseService.isLoggedIn) alert('Logged out Successfully');
  }
}
