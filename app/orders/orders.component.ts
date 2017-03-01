 import { Component, OnInit } from '@angular/core'
 import { ProductService } from '../services/productSvc.injectable'

 @Component({
     styleUrls: ['app/orders/orders.component.css'],
     templateUrl:'app/orders/orders.component.html',
     providers:[ProductService]
 })

 export class OrdersComponent implements OnInit{

    orders: any;
    constructor(private productService: ProductService){

    }
    ngOnInit(){
       this.productService.getOrderHistory().subscribe(res => this.orders=res)
    }

 }