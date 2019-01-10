import {Ingredient} from "../shered/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientChanged.emit(this.ingredients.slice());
  }

}
