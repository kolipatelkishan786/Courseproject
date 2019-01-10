import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shered/ingredient.model";

export  class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Testy Schnitzel',
      'A super-test Schnitzel-just awesome!',
      'http://www.citycountry.net.au/wp-content/uploads/2017/06/250500-Steggles.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/16961-bbq-pulled-pork-burger-600x600.jpg?ext=.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecoipes() {
    return this.recipes.slice();
  }
}
