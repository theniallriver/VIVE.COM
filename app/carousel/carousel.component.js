"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeCarouselComponent = (function () {
    function HomeCarouselComponent() {
    }
    HomeCarouselComponent.prototype.ngOnInit = function () {
        $('.top-carousel').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            infinite: true,
            adaptiveHeight: true,
            arrows: false
        });
    };
    return HomeCarouselComponent;
}());
HomeCarouselComponent = __decorate([
    core_1.Component({
        selector: 'vive-carousel',
        templateUrl: 'app/carousel/carousel.component.html',
        styleUrls: ['app/carousel/slick.css', 'app/carousel/carousel.component.css']
    })
], HomeCarouselComponent);
exports.HomeCarouselComponent = HomeCarouselComponent;
//# sourceMappingURL=carousel.component.js.map