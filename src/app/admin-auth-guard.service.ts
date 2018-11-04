// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from './auth.service';
// import { UserService } from './user.service';
//
// import { map } from 'rxjs/operators';
// import { switchMap } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import {User} from 'firebase';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AdminAuthGuardService implements CanActivate {
//
//   constructor(private auth: AuthService, private userService: UserService, private router: Router) { }
//
//   canActivate(): Observable<boolean> {
//     return this.auth.user$.pipe(switchMap(user => this.userService.getUser(user.uid))).pipe(map({
//       User => User.isAdmin));
//   }
// }
