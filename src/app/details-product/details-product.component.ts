import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageService} from '../service/storage.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ShoppingCartService} from '../service/shopping-cart.service';
import {Key, Product} from '../Product';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  product: Product;
  k: Key;

  constructor(private storageServis: StorageService,private SCServis: ShoppingCartService , private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getParam();
    }

  addToCart(product){
   this.SCServis.fetchCartProduct(product);
   this.SCServis.AddAmount();
  }

  getProduct(key: string) {
    this.storageServis.fetchProduct(key).then(product => {
      for (const productKey in product) {
        if (product[productKey]) {
          this.product = {...product[productKey]};
        };
      }
      console.log(product);
    });
  }

  getParam() {
    this.route.params.subscribe(
      (params: Params) => {
        const productKey = params['id'];
        this.getProduct(productKey);
      }
    );
  }


}
