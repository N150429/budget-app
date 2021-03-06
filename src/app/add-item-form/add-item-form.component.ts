import { BudgetItem } from './../shared/model/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent implements OnInit {
  constructor() {}

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<
    BudgetItem
  >();
  isNewItem: boolean;
  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
