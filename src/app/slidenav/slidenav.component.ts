import { Component, OnInit } from '@angular/core';
import { Items } from './slidenav-item';

@Component({
  selector: 'app-slidenav',
  templateUrl: './slidenav.component.html',
  styleUrls: ['./slidenav.component.css']
})
export class SlidenavComponent implements OnInit {

  item: Items[] = 
    [
      {
          "itemName": "Contrast Printed T-Shirt",
          "imageUrl": "assets/images/Contrast-Print-T-shirt (5)-cr-450x672.jpg ",
          "itemcolor": "",
          "model": 2122209026,
          "itemprice": 20,
          "itemid": 1
      },
      {
          "itemName": "Men Short Sleeves Knit Polo Shirt",
          "imageUrl": "assets/images/Contrast-Printed-T-Shirt (7)-cr-450x672.jpg",
          "itemcolor": "",
          "model": 2122209026,
          "itemprice": 20,
          "itemid": 2
      },
      {
          "itemName": "Men Long Sleeves Stripe Shirt",
          "imageUrl": "assets/images/Men-Long-Sleeves-Sweater-Shirt (6)-cr-450x672.jpg ",
          "itemcolor": "",
          "model": 2122209026,
          "itemprice": 20,
          "itemid": 3
      },
      {
          "itemName": "Puffer Jacket",
          "imageUrl": "assets/images/Men-Short-Sleeves-Slim-Fit-Polo-Shirt (5)-cr-450x672.jpg",
          "itemcolor": "",
          "model": 2122209026,
          "itemprice": 20,
          "itemid": 4
      }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
