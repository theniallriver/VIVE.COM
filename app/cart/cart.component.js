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
var core_1 = require("@angular/core");
var productSvc_injectable_1 = require("../services/productSvc.injectable");
var CartComponent = (function () {
    function CartComponent(productService, zone) {
        this.productService = productService;
        this.zone = zone;
    }
    CartComponent.prototype.removeFromCart = function (id) {
        var _this = this;
        this.productService.removeItem(id);
        this.productService.getCart()
            .subscribe(function (res) { return _this.myCart = res; });
        this.getTotal();
    };
    CartComponent.prototype.getTotal = function () {
        var _this = this;
        this.productService.getTotal()
            .subscribe(function (res) {
            console.log('my cart ctrl: ', res);
            var myTotal = 0;
            for (var i = 0; i < res.length; i++) {
                myTotal += (res[i].qty * res[i].product_price);
            }
            myTotal;
            console.log("this.total", myTotal);
            _this.total = myTotal;
            return myTotal;
        });
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getCart()
            .subscribe(function (res) { return _this.myCart = res; }, this.zone.run(function () { return console.log('re-rendered'); }));
        this.total = this.productService.total;
        console.log('init-hi' + this.productService.total);
        this.getTotal();
    };
    CartComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
            locale: 'auto',
            token: function (token) {
            }
        });
        this.productService.pushCart()
            .subscribe(function (res) { return console.log(res); });
        handler.open({
            name: 'Vive.com',
            description: 'HTC Vive/Accessories',
            amount: Math.ceil(this.total * 100 * 1.085 + 49.99)
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        styleUrls: ['app/cart/cart.component.css'],
        templateUrl: 'app/cart/cart.component.html',
        providers: [productSvc_injectable_1.ProductService]
    }),
    __metadata("design:paramtypes", [productSvc_injectable_1.ProductService, core_1.NgZone])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map