import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  public listaComidas: Array<{ comida: string }> = [
    { comida: 'X-salada' },
    { comida: 'X-egg' },
    { comida: 'X-Bacon' },
  ];

  public showMe(nome: NgModel) {
    alert(nome.value);
  }

  public submitForm(form: NgForm) {
    console.log(form.value);
  }
}
