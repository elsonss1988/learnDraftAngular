import { Component } from '@angular/core';
import { FoodListService } from 'src/app/service/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css'],
})
export class FoodAddComponent {
  constructor(private foodListService: FoodListService) {}

  public listAddItem(value: string) {
    return this.foodListService.foodListAdd(value).subscribe({
      next: (res) => this.foodListService.foodListAlert(res),
      error: (error) => error,
    });
  }
}
