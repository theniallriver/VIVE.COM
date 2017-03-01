import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';
import * as slick from 'slick-carousel';

@Component({
    selector: 'pc-carousel2',
    templateUrl:'app/pcs/pc-carousel2/pc-carousel2.component.html',
    styleUrls:['app/carousel/slick.css',  'app/pcs/pc-carousel2/pc-carousel2.component.css']
})
export class PCCarousel2Component implements OnInit{
    pictures:string[]=['aasdf'];
    ngOnInit(){
         $('.pc-carousel2').slick(
             {
          autoplay:true,
          autoplaySpeed:3000,
          dots: false,
          arrows:false,
          slidesToShow: 1,
          slidesToScroll:1
        }
        );
      
    }
}