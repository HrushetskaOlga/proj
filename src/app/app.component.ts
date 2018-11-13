import { Component, OnInit } from '@angular/core';
import  * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyCCVluVOsZqCfO_bXcj0T0ZhgRfivI7Xu0',
      authDomain: 'myproject-83b99.firebaseapp.com',
      databaseURL: 'https://myproject-83b99.firebaseio.com',
      projectId: 'myproject-83b99',
      storageBucket: 'myproject-83b99.appspot.com',
      messagingSenderId: '865660496860'
    };
    firebase.initializeApp(config);
  }

}
