"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PCCarouselComponent = (function () {
    function PCCarouselComponent() {
        this.pictures = ['aasdf'];
    }
    PCCarouselComponent.prototype.ngOnInit = function () {
        $('.pc-carousel').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 2
        });
    };
    return PCCarouselComponent;
}());
PCCarouselComponent = __decorate([
    core_1.Component({
        selector: 'pc-carousel',
        templateUrl: 'app/pcs/pc-carousel/pc-carousel.component.html',
        styleUrls: ['app/carousel/slick.css', 'app/pcs/pc-carousel/pc-carousel.component.css']
    })
], PCCarouselComponent);
exports.PCCarouselComponent = PCCarouselComponent;
//# sourceMappingURL=pc-carousel.component.js.map