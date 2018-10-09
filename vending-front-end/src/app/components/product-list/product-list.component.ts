import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public product: ProductServiceService) { }
  
  displayItems: Array<Product> = this.product.mockUpData;

  testButton() {
    console.log(this.product.mockUpData);
  }

  categoryButton(category) {
    this.displayItems = this.product.filterByCategory(category);
  }

  ngOnInit() {
  }

}
