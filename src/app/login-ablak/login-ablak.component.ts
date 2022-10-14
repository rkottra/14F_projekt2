import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-ablak',
  templateUrl: './login-ablak.component.html',
  styleUrls: ['./login-ablak.component.css']
})
export class LoginAblakComponent implements OnInit {

  public labelUsername:string = "Felhasználó név:";
  public labelPassword:string = "Jelszó:";
  public labelSubmit:string   = "Belépés";
  public labelReset:string    = "Adatok törlése";

  public username:string      = "Kovács János";
  public password:string      = "";

  public loggedin: boolean    = false;
  public error:string = "";

  constructor() { 
   
  }

  ngOnInit(): void {
    this.labelUsername = "Username:";
    this.labelPassword = "Password:";
    this.labelSubmit   = "Login";
    this.labelReset    = "Reset";
  }

  logout() {
    this.loggedin = false;
    this.error    = "";
    this.password = "";
  }

  kattint() {
    this.error = "";
    this.loggedin = false;
    if (this.username == "admin" && this.password=="123") {
      this.loggedin = true;
    } else {
      this.error = "Hibás felhasználónév vagy jelszó.";
    }
  }
}