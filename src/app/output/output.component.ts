import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();
  public list: Array<{ nome: String; idade: number }> = [
    { nome: 'Elson', idade: 29 },
    { nome: 'Elder', idade: 19 },
    { nome: 'Elaine', idade: 39 },
  ];

  public getDados(event: number) {
    console.log(this.list[event]);
    this.enviarDados.emit(this.list[event]);
  }
}
