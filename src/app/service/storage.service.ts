import {Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {Subject} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Product} from '../Product';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  productsEmiter = new Subject<any[]>();
  productKey: string;

  constructor(private router: Router, private  route: ActivatedRoute) {
  }

  downloadImages(images: any[]) {
    images.forEach(img => {
      if (img.file) {
        const date = new Date().getTime();
        const ref = firebase.storage().ref(
          `images/${date}`);
        ref.put(img.file).on('state_changed',
          () => {
          },
          () => {
          },
          () => {
            ref.getDownloadURL().then(url => {
            });
          });
      }
      ;
    });
  }

  // fetchProducts() {
  //   const products = [];
  //   firebase.database().ref('products').on('value', (a) => {
  //     const data = a.val();
  //     for (const key in data) {
  //       const newProduct = {
  //         ...data[key],
  //         key
  //       };
  //       products.push(newProduct);
  //     }
  //     this.productsEmiter.next(products);
  //   });
  // }

  fetchProduct(key: string): Promise<any> {
    return firebase.database().ref('products').orderByKey().equalTo(key).once('value').then(result => {
      const data = result.val();
      console.log(data);
      return data;
    });
  }

  getParam() {
    const paramater = 0;
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params['id']);
      }
    );
  }

  featchDetalsProduct(product) {
    this.router.navigate(['details/' + product.key]);
    this.productKey = product.key;
    console.log(this.productKey);
  }

}
