import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: any;
  productCounter = 0
  cart = []

  constructor() { }

  ngOnInit() {

    console.log(this.product)
    
  }

  addItemToCart(product) {

    this.productCounter++
    
    this.cart.push(product)

    console.log(this.cart)
    
  }

  removeItemToCart() {
    
    if(this.productCounter != 0) {
      return this.productCounter--;
    }
  }
}
