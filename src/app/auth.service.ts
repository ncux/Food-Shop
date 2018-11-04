import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = firebaseAuth.authState;
  }

  loginWithGoogle() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.firebaseAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logoutUser() {
    this.firebaseAuth.auth.signOut();
  }
}
