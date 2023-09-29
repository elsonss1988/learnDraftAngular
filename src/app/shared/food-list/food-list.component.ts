import { Component } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/service/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent {
  //public foodList: Array<string> = [];

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    //this.foodList = this.foodListService.foodList();

    this.foodListService.foodList().subscribe({
      next: (res) => (this.foodList = res),
      error: (error) => console.log(error),
    });

    this.foodListService.emitEvent.subscribe((res) => {
      alert(`Olha voce add => ${res.nome}`);
      return this.foodList.push(res);
    });
  }

  public listAddItem(value: string) {
    console.log(value);
  }

  public foodListEdit(nome: string, id: number) {
    this.foodListService.foodListEdit(nome, id).subscribe({
      next: (res) => {
        return console.log(res);
      },
      error: (error) => error,
    });
  }

  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res) => {
        this.foodList = this.foodList.filter((item) => {
          return id !== item.id;
        });

        const item = this.foodList.filter((item) => {
          return id === item.id;
        });
        alert(`deletando ${item.map((item) => item.nome)}`);
      },
      error: (error) => alert(`Error pra deletar o ${id}`),
    });
  }
}
