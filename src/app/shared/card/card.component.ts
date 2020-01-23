import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: any;
  productCounter = 0

  constructor() { }

  ngOnInit() {

    console.log(this.product);
    
  }

  addItemToCart() {

    return this.productCounter++;
  }

  removeItemToCart() {
    
    if(this.productCounter != 0) {
      return this.productCounter--;
    }
  }
}
