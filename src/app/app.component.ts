import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCCZSY3MY_ZkekXmXWjiwTVutlMwQJyg1E",
      authDomain: "ng-recipe-book-bd2c2.firebaseapp.com"
    });
  }
 onNavigate(feature: string) {
  this.loadedFeature = feature;
 }
}
