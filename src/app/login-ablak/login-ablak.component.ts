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

  constructor() { 
   
  }

  ngOnInit(): void {
    this.labelUsername = "Username:";
    this.labelPassword = "Password:";
    this.labelSubmit   = "Login";
    this.labelReset    = "Reset";
  }

  kattint() {
    alert("Hahó");
  }
}