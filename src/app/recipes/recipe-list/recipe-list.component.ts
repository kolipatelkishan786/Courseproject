import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/originals/6f/67/17/6f6717b434fcc97cb5fc8747b23b5001.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/originals/6f/67/17/6f6717b434fcc97cb5fc8747b23b5001.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
