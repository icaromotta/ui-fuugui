import { Product } from './../models/product.model';
import { ProductInterfaces } from './../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  productCounter = 0
  products: ProductInterfaces[]

  constructor(private productsService: ProductsService) { }

  ngOnInit() {

    this.productsService.list()
      .subscribe((response) => {
        this.products = response
      });
  }

  addItemToCart() {

    return this.productCounter++;
  }

  removeItemToCart() {

    return this.productCounter--;
  }
}
