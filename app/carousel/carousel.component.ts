import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';
import * as slick from 'slick-carousel'; 

@Component({
    selector: 'vive-carousel',
    templateUrl:'app/carousel/carousel.component.html',
    styleUrls:['app/carousel/slick.css',  'app/carousel/carousel.component.css']
})

export class HomeCarouselComponent implements OnInit{


    ngOnInit(){
      
         $('.top-carousel').slick(
             {
          autoplay: true,
          autoplaySpeed: 5000,
          dots: false,
          infinite:true,
          adaptiveHeight:true,
          arrows:false
        }
        );
      
    }

   
   
}