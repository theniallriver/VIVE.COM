import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';
import * as slick from 'slick-carousel';

@Component({
    selector: 'pc-carousel',
    templateUrl:'app/pcs/pc-carousel/pc-carousel.component.html',
    styleUrls:['app/carousel/slick.css',  'app/pcs/pc-carousel/pc-carousel.component.css']
})
export class PCCarouselComponent implements OnInit{
    pictures:string[]=['aasdf'];
    ngOnInit(){
         $('.pc-carousel').slick(
             {
          autoplay:true,
          autoplaySpeed:3000,
          dots: false,
          arrows:false,
          slidesToShow: 1,
          slidesToScroll:2
        }
        ); 
    }
}