import { Component, Input, OnInit } from '@angular/core';
import { TermekModel } from '../models/termek.model';
import { KosarService } from '../kosar.service';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.css']
})
export class TermekComponent implements OnInit {

  @Input() termek:TermekModel = new TermekModel();
  public db:number = 1;

  constructor(private kosarszervi:KosarService) { }

  ngOnInit(): void {
  }

  kosarba() {
    this.kosarszervi.kosarbaBetesz(this.termek, this.db);
  }
}
