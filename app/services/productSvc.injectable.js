"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/Rx");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.total = 0;
    }
    ProductService.prototype.getProductInfo = function () {
        return this.http.get('/api/products')
            .do(function (res) { return console.log(res); })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.addToCart = function (id, quantity) {
        return this.http.post('/api/cart/', { product_id: id, quantity: quantity })
            .subscribe();
    };
    ProductService.prototype.getCart = function () {
        return this.http.get('/api/cart')
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getTotal = function () {
        return this.http.get('/api/cart')
            .map(function (res) { return res.json(); })
            .do(function (res) {
            var myTotal = 0;
            for (var i = 0; i < res.length; i++) {
                myTotal += (res[i].qty * res[i].product_price);
            }
            myTotal;
            console.log("this.total", myTotal);
            this.total = myTotal;
        });
    };
    ProductService.prototype.pushCart = function () {
        return this.http.get('/api/checkout')
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.removeItem = function (id) {
        console.log('removin id ' + id);
        return this.http.delete('/api/cart/' + id)
            .subscribe();
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=productSvc.injectable.js.map