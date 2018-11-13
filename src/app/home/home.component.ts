import {Component, OnDestroy, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {StorageService} from '../service/storage.service';
import {functions} from 'firebase';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../service/shopping-cart.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  products1 = [];
  term: string;
  term2: string;
  categorias = ['botle', 'tetra pak'];
  subscription: Subscription;


  constructor(private storageServis: StorageService, private router: Router, private SCService: ShoppingCartService) {

  }


  addCart(product) {
    this.storageServis.featchDetalsProduct(product);
  }

  addShoppingCart(product){
    this.SCService.fetchCartProduct(product);
    this.SCService.AddAmount();
  }

  pushValue(categoria) {
    this.term2 = categoria;
  }
  fetchProducts() {
    const products = [];
    firebase.database().ref('products').on('value', (a) => {
      const data = a.val();
      for (const key in data) {
        const newProduct = {
          ...data[key],
          key
        };
        products.push(newProduct);
      }
      this.products1 = products;
    });
  }


  ngOnInit() {
    this.storageServis.getParam();
    this.fetchProducts();
    console.log('OnInit');
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
    console.log('home destroyed');
  }
}
