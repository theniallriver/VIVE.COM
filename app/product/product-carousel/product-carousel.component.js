"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductCarouselComponent = (function () {
    function ProductCarouselComponent() {
        this.pictures = ['aasdf'];
    }
    ProductCarouselComponent.prototype.ngOnInit = function () {
        $('.carousel').slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 2
        });
    };
    return ProductCarouselComponent;
}());
ProductCarouselComponent = __decorate([
    core_1.Component({
        selector: 'product-carousel',
        templateUrl: 'app/product/product-carousel/product-carousel.component.html',
        styleUrls: ['app/carousel/slick.css', 'app/product/product-carousel/product-carousel.component.css']
    })
], ProductCarouselComponent);
exports.ProductCarouselComponent = ProductCarouselComponent;
//# sourceMappingURL=product-carousel.component.js.map