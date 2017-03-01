import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'

@Injectable()

export class ProductService {
myProducts:any
    constructor(private http: Http) {}
total:number = 0;
    getProductInfo(): Observable<Response> {
        return this.http.get('/api/products')
        .do(res => console.log(res))
        .map(res => res.json())
        
    }
    addToCart(id: any, quantity:any){
        return this.http.post('/api/cart/', {product_id:id, quantity:quantity})
        .subscribe();
    }
    getCart(): Observable<Response>{
        return this.http.get('/api/cart')
        .map(res => res.json())
        
    }


getTotal(): Observable<Response>{
    return this.http.get('/api/cart')
        .map(res => res.json())
        .do(function(res){
            var myTotal: any=0;
            for(var i = 0; i < res.length; i++){
                myTotal += (res[i].qty * res[i].product_price)
            }
             myTotal;
            console.log("this.total", myTotal)
            this.total= myTotal;
            
        })
        
    }
pushCart(){
    return this.http.get('/api/checkout')
    .map(res => res.json())
}
    removeItem(id: any){
        console.log('removin id '+ id);
        return this.http.delete('/api/cart/'+id)
        .subscribe()
    }
}