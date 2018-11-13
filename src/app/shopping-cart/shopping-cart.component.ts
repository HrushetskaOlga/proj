import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../service/shopping-cart.service';
import {Product} from '../Product';
import * as firebase from 'firebase';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products1 = [];
  sumPrice: number;
  constructor(private SCService: ShoppingCartService) {
  }

  // deleteFirebace(product){
  //   this.SCService.deleteFirebace(product);
  // }

  fetchCartFirebase() {
    const products = [];
    firebase.database().ref('basket').on('value', (a) => {
      const data = a.val();
      let sum = 0;
      for (const key in data) {
        sum += data[key].price;
        const newProduct = {
          ...data[key],
          key
        };
     //   this.products1.push(newProduct);
        products.push(newProduct)
      }
      this.products1 = products;
      this.sumPrice = sum;
    });
  }

  deleteFirebace(product) {
    this.products1.splice(product,2);
    firebase.database().ref('basket').child(product).remove();
    this.SCService.subtractAmount()
  }


  ngOnInit() {
    this.fetchCartFirebase();
    // this.SCService.productsEmiter.subscribe((products) => {
    // this.products1 = products;
    // console.log(this.products1);
    // });
    // this.SCService.totalPrice.subscribe((sum) =>{
    // this.sumPrice = sum;
    // });
    }
  }
