import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public getDados: { nome: string; idade: number } | undefined;
  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
    console.log('setDados', this.getDados);
  }
  public addValue: number = 0;
  public sumPlusOne() {
    this.addValue += 1;
    console.log(this.addValue);
  }
}
