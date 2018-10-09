import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public product: ProductServiceService) { }
  
  testButton() {
    console.log(this.product.mockUpData);
  }

  ngOnInit() {
  }

}
