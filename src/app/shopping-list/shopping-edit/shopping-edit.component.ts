import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/internal/Subscription";
import {Ingredient} from "../../shered/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index; 
        this.editMode = true;
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
