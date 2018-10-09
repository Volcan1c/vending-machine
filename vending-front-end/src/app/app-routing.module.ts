import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

const routes: Routes = [
  {path: 'items', component: ProductListComponent},
  {path: 'items/:name', component: ItemPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
