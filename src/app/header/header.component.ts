import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() selectedCategory = new EventEmitter();
  @Output() toogle = new EventEmitter();

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  showCheckout() {
    this.isOpen = !this.isOpen;
    this.toogle.emit(this.isOpen);
    console.log(this.isOpen);
  }

  getProductsByCategory(categoryM: string) {

    console.log(categoryM);
    
    this.selectedCategory.emit(categoryM);
  }
}
