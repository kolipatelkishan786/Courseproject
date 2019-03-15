import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipEditComponent} from "./recip-edit/recip-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule {

}
