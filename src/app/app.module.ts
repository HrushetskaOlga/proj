import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import {ServicesService} from './service/services.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import {StorageService} from './service/storage.service';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './Filter/filter.pipe';
import { Filter2Pipe } from './Filter/filter2.pipe';
import { DetailsProductComponent } from './details-product/details-product.component';
import {ShoppingCartService} from './service/shopping-cart.service';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FormComponent,
    HomeComponent,
    FilterPipe,
    Filter2Pipe,
    DetailsProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
  ],
  providers: [ServicesService, StorageService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
