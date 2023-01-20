import { Component, OnInit } from '@angular/core';
import { TermekModel } from '../models/termek.model';
import { KosarService } from '../kosar.service';
import { KosarbeliTermekModel } from '../models/kosarbeli-termek.model';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent implements OnInit {

  public termekek:KosarbeliTermekModel[] = [];

  constructor(private kosarszerviz:KosarService) { 
    this.termekek = this.kosarszerviz.kosaratKilistazza();
  }

  ngOnInit(): void {
  }

}
