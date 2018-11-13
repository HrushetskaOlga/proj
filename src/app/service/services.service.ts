import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Subject} from 'rxjs';
import {List} from '../Filter/list';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
lists: List[];
newList = new Subject<List[]>();
  listRef = firebase.database().ref('lists');
  constructor() {
  }

  FetchList(){
this.listRef.on('value', snap => {
  const obj = snap.val();
  const arr = [];
  if (obj) {
    const keys = Object.keys(obj)
    for (const key of keys) {
      arr.push({
        name:obj[key].name,
        id: key
      });
    }
  }
  this.lists = arr;
  this.newList.next(this.lists);
  });
  }

  AddToCart(list: string){
    const name = list;
    this.listRef.push({name});
  }

  DeleteToCart(info: any) {
    return firebase.database().ref().update({name})

  }

  SingUp(email: string, password: string): Promise <any> {
  return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }
  SingIn(email: string, password: string): Promise <any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

}
