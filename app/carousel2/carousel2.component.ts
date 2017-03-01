import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';
import * as slick from 'slick-carousel'; 
@Component({
    selector: 'vive-carousel2',
    templateUrl:'app/carousel2/carousel2.component.html',
    styleUrls:['app/carousel/slick.css',  'app/carousel2/carousel2.component.css']
})
export class HomeCarousel2Component implements OnInit{
    ngOnInit(){
         $('.bottom-carousel').slick(
             {
                 autoplay: true,
                 autoplaySpeed: 5000,
          dots: false,
          infinite:true,
          arrows:false
        });
    }  
}