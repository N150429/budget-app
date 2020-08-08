import { UpdateEvent } from './../budget-item-list/budget-item-list.component';
import { BudgetItem } from './../shared/model/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  total_budget = 0;
  constructor() {}

  ngOnInit(): void {}
  addItem = (newItem: BudgetItem) => {
    this.budgetItems.push(newItem);
    this.total_budget += newItem.amount;
  };
  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.total_budget -= item.amount;
  }
  updateItem(UpdateEvent: UpdateEvent) {
    //result is the updated budget
    //replace the item with the updated/submited from the form
    this.budgetItems[this.budgetItems.indexOf(UpdateEvent.old)] =
      UpdateEvent.new;
    //update the total bidget
    this.total_budget -= UpdateEvent.old.amount;
    this.total_budget += UpdateEvent.new.amount;
  }
}
