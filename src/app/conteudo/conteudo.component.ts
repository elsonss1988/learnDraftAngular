import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css'],
})
export class ConteudoComponent {
  public condition!: Boolean;
  public valor: boolean = true;
  public colorButton: string = '#FFAAAA';
  public heightButton = '20px';

  ngOnInit(): void {
    this.condition = false;

    setInterval(() => {
      if (this.valor) {
        this.valor = false;
        this.colorButton = '#CCBB00';
        this.heightButton = '21px';
      } else {
        this.valor = true;
        this.colorButton = '#CCFFAA';
        this.heightButton = '20px';
      }
    }, 2000);
  }

  public nome: string = '';
  public position: any = { x: 0, y: 0 };

  public list: Array<{ nome: String; idade: number }> = [
    { nome: 'Ana Paula Duarte', idade: 29 },
    { nome: 'Roberta SIlva', idade: 31 },
    { nome: 'Carla Limeira', idade: 45 },
  ];

  public alertaInfo(valor: string) {
    alert(valor);
  }
  public mouseTest(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  public onClickAddList() {
    this.list.push({ nome: 'Nay', idade: 31 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }

  public salvar(nome: String) {
    const idade = Math.floor(Math.random() * 100);
    this.list.push({ nome, idade });
  }

  public getNome(event: String) {
    if ((event = 'admin')) {
      this.condition = true;
    } else {
      this.condition = false;
    }
  }

  title = 'mouse-event';
}
