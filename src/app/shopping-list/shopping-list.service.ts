import {Ingredient} from "../shered/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/internal/Subject";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /*for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}
