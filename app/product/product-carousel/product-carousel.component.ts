import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';
import * as slick from 'slick-carousel';

@Component({
    selector: 'product-carousel',
    templateUrl:'app/product/product-carousel/product-carousel.component.html',
    styleUrls:['app/carousel/slick.css',  'app/product/product-carousel/product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit{
    pictures:string[]=['aasdf'];
    ngOnInit(){
         $('.carousel').slick(
             {
          dots: false,
          arrows:false,
          slidesToShow: 1,
          slidesToScroll:2
        }
        );
      
    }
}