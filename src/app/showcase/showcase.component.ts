import { Product } from './../models/product.model';
import { ProductInterfaces } from './../interfaces/product';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  products: ProductInterfaces[]
  products$: Observable<ProductInterfaces[]>
  toogle: boolean = true

  @Input() productCategory: any
  @Input() checkout: boolean
  checkoutIsOpen: boolean = true

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    
    this.products$ = this.productsService.listAll()
  }

  ngOnChanges(changes: SimpleChanges): void {
  
    // this.checkoutIsOpen = this.checkout 
    this.products$ = this.productsService.listByCategory(this.productCategory)
  }
}
