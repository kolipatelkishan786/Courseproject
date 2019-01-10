import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shered/ingredient.model";

export  class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/originals/6f/67/17/6f6717b434fcc97cb5fc8747b23b5001.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/originals/6f/67/17/6f6717b434fcc97cb5fc8747b23b5001.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecoipes() {
    return this.recipes.slice();
  }
}
