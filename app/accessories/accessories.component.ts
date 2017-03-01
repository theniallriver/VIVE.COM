import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productSvc.injectable'
@Component({
    styleUrls: ['app/accessories/accessories.component.css'],
    templateUrl: 'app/accessories/accessories.component.html',
    providers: [ProductService]
})

export class AccessoriesComponent{
    products: any;
    constructor(private productService: ProductService){

    }
  
    addToCart(id: any, quantity:any){
        console.log("Product ID: "+id+',  Quantity: '+ quantity)
        this.productService.addToCart(id, quantity)
    }

    ngOnInit(){
        this.productService.getProductInfo()
               .subscribe(res => this.products = res)
        };
      
    }