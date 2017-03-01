"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PCCarousel2Component = (function () {
    function PCCarousel2Component() {
        this.pictures = ['aasdf'];
    }
    PCCarousel2Component.prototype.ngOnInit = function () {
        $('.pc-carousel2').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    };
    return PCCarousel2Component;
}());
PCCarousel2Component = __decorate([
    core_1.Component({
        selector: 'pc-carousel2',
        templateUrl: 'app/pcs/pc-carousel2/pc-carousel2.component.html',
        styleUrls: ['app/carousel/slick.css', 'app/pcs/pc-carousel2/pc-carousel2.component.css']
    })
], PCCarousel2Component);
exports.PCCarousel2Component = PCCarousel2Component;
//# sourceMappingURL=pc-carousel2.component.js.map