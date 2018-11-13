import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {HomeComponent} from './home/home.component';
import {DetailsProductComponent} from './details-product/details-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details/:id', component: DetailsProductComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRouterModule {
}
