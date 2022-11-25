import { Component, OnInit } from '@angular/core';
import { TermekModel } from '../termek.model';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent implements OnInit {

  public termekek: TermekModel[]=
  [
    {
      nev:"alma",
      leiras:"szép piros almák",
      ar:100
    },
    {
      nev:"körte",
      leiras:"szép zöld körték",
      ar:150
    },
    {
      nev:"szilva",
      leiras:"",
      ar:120
    },
    {
      nev:"barack",
      leiras:"",
      ar:200
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
