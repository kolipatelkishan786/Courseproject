import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from "./shered/dropdown.directive";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipeService} from "./recipes/recipe.service";
import {HttpClientModule} from "@angular/common/http";
import {DataStorageService} from "./shered/data.storage.service";
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth.guard.service";
import {RecipesModule} from "./recipes/recipes.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RecipesModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
