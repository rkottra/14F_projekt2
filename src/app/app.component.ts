import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '2. projekt';

  public error:string = "";

  public errorBekovetkezese(errorszoveg: string) {
    this.error = errorszoveg;
  }
}
