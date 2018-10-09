import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/interfaces/product';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public product: ProductServiceService) { }
  
  selectedItem: Product = {
    name: "Cheese",
    quantity: 5,
    price: 5,
    image: "https://images-na.ssl-images-amazon.com/images/I/41Ip5NBRyEL._SX355_.jpg",
    description: "Yellow with holes",
    category: ["food", "all"]
  };

  displayItems: Array<Product> = this.product.mockUpData;
  
  testButton() {
    console.log(this.product.mockUpData);
  }

  categoryButton(category) {
    this.displayItems = this.product.filterByCategory(category);
  }
  
  changeSelectedItem(name) {
    this.selectedItem = _.find(this.displayItems, x => x.name.toLowerCase() === name);
    console.log(this.selectedItem);
  }

  ngOnInit() {
  }

}
