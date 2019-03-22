import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {ReactiveFormsModule} from "@angular/forms";
import {RecipeService} from "./recipes/recipe.service";
import {HttpClientModule} from "@angular/common/http";
import {DataStorageService} from "./shered/data.storage.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth.guard.service";
import {SharedModule} from "./shered/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
