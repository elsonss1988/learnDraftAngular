import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewComponentComponent, FoodListComponent, FoodAddComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [NewComponentComponent, FoodListComponent, FoodAddComponent],
})
export class SharedModule {}
