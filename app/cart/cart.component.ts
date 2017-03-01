import { Component, OnInit, NgZone } from '@angular/core';
import { ProductService } from '../services/productSvc.injectable'
@Component({
    styleUrls: ['app/cart/cart.component.css'],
    templateUrl: 'app/cart/cart.component.html',
    providers:[ProductService]
})

export class CartComponent implements OnInit{
    myCart: any;
    total: any;
    constructor(private productService : ProductService, private zone:NgZone){
      
    }
    removeFromCart(id: any){
        this.productService.removeItem(id);
        this.productService.getCart()
        .subscribe(res => this.myCart = res)
        this.getTotal();
    }

    getTotal(){
    
        this.productService.getTotal()
        .subscribe((res) => {
            console.log('my cart ctrl: ', res)
            var myTotal: any=0;
            for(var i = 0; i < res.length; i++){
                myTotal += (res[i].qty * res[i].product_price)
            }
             myTotal;
            console.log("this.total", myTotal)
            this.total = myTotal;
            return myTotal;
        })
    }

    ngOnInit(){
        this.productService.getCart()
        .subscribe(res => this.myCart = res, this.zone.run(()=>console.log('re-rendered')))
        this.total=this.productService.total;
        console.log('init-hi'+this.productService.total)
        this.getTotal()
    }

    

    openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
      } 
    });

this.productService.pushCart()
    .subscribe(res => console.log(res))


    handler.open({
      name: 'Vive.com',
      description: 'HTC Vive/Accessories',
      amount: Math.ceil(this.total * 100*1.085+49.99)
    });



  }
}