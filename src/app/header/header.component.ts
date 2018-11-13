import { Component, OnInit } from '@angular/core';
import {StorageService} from '../service/storage.service';
import {ShoppingCartService} from '../service/shopping-cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  counter = 0;

  constructor(private storageServis: StorageService, private SCService: ShoppingCartService) { }

  ngOnInit() {
    this.SCService.counter.subscribe((amount: number) => {
      this.counter = amount;
    });
  }

}
