import { Injectable } from '@angular/core';
import {Product} from '../Product';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  product: Product;
  productsEmiter = new Subject<any[]>();
  totalPrice = new Subject<number>();
  counter = new Subject<number>();
  amount = 0;
  products = [];


  constructor() {
  }

  AddAmount(){
    this.amount++;
    this.counter.next(this.amount);
}

  subtractAmount(){
    this.amount--;
    this.counter.next(this.amount);
  }
//   fetchCartFirebase() {
//     firebase.database().ref('basket').on('value', (a) => {
//       const data = a.val();
//       let sum = 0;
//       for (const key in data) {
//         sum += data[key].price;
//         const newProduct = {
//           ...data[key],
//           key
//         };
//         this.products.push(newProduct);
//       }
//       this.productsEmiter.next(this.products);
//       this.totalPrice.next(sum);
//     });
//   }
//
//
//   deleteFirebace(product){
//     console.log(product);
//     this.products = [];
//     firebase.database().ref('basket').child(product).remove();
// }


  fetchCartProduct(product){
    console.log(product);
    firebase.database().ref('basket').push(product);
  }



}



