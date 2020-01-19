import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from "../../core/auth.service";


@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  usernameText: string;
  usernameAvailable: boolean;

  constructor(public auth: AuthService) { }


  checkUsername() {
    this.auth.checkUsername(this.usernameText).subscribe(username => {
      this.usernameAvailable = !username.$value
    })
  }

  updateUsername() {
    console.log
    this.auth.updateUsername(this.usernameText)
  }


  signInWithGoogle() {
    this.auth.googleLogin()
  }
}