import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, public product: ProductServiceService) { }

  item = _.find(this.product.mockUpData, x => x.name.toLowerCase() === this.activateRoute.snapshot.params.name.toLowerCase());

  ngOnInit() {
  }

}
