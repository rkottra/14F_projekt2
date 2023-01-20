import { Injectable } from '@angular/core';
import { KosarbeliTermekModel } from './models/kosarbeli-termek.model';
import { TermekModel } from './models/termek.model';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  public termekek:KosarbeliTermekModel[] = [];

  constructor() { }

  kosarbaBetesz(termek:TermekModel, db:number = 1) {
    if (this.termekek.filter(t=>t.termek.nev == termek.nev).length > 0)  {
      this.termekek.filter(t=>t.termek.nev == termek.nev)[0].db += db;
    } else {
      let seged    = new KosarbeliTermekModel();
      seged.termek = termek;
      seged.db     = db;
      this.termekek.push(seged);
    }
  }

  kosarbolTorles(termek:TermekModel) {
/*    if (this.termekek.filter(t=>t.termek.nev == termek.nev).length > 0)  {
      delete this.termekek[];
    }*/
  }

  kosaratKilistazza() {
    return this.termekek;
  }
}
