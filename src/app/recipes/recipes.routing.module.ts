import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {AuthGuardService} from "../auth/auth.guard.service";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipEditComponent} from "./recip-edit/recip-edit.component";
import {RecipesComponent} from "./recipes.component";

const recipesRoutes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipEditComponent, canActivate: [AuthGuardService]}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
