"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
//Components
var app_component_1 = require("./app.component");
var nav_component_1 = require("./navbar/nav.component");
var footer_component_1 = require("./footer/footer.component");
var home_component_1 = require("./home/home.component");
var product_component_1 = require("./product/product.component");
var product_nav_component_1 = require("./product/product-nav/product-nav.component");
var carousel_component_1 = require("./carousel/carousel.component");
var carousel2_component_1 = require("./carousel2/carousel2.component");
var product_carousel_component_1 = require("./product/product-carousel/product-carousel.component");
var product_carousel2_component_1 = require("./product/product-carousel2/product-carousel2.component");
var product_carousel3_component_1 = require("./product/product-carousel3/product-carousel3.component");
var account_component_1 = require("./account/account.component");
var accessories_component_1 = require("./accessories/accessories.component");
var cart_component_1 = require("./cart/cart.component");
var experiences_component_1 = require("./experiences/experiences.component");
var pcs_component_1 = require("./pcs/pcs.component");
var pc_carousel_component_1 = require("./pcs/pc-carousel/pc-carousel.component");
var pc_carousel2_component_1 = require("./pcs/pc-carousel2/pc-carousel2.component");
var installation_component_1 = require("./installation/installation.component");
var enterprise_component_1 = require("./enterprise/enterprise.component");
var orders_component_1 = require("./orders/orders.component");
var developers_component_1 = require("./developers/developers.component");
var dev_nav_component_1 = require("./developers-nav/dev-nav.component");
var certification_component_1 = require("./certification/certification.component");
var vivex_component_1 = require("./vive-x/vivex.component");
var dev_tracker_component_1 = require("./dev-tracker/dev-tracker.component");
var studios_component_1 = require("./studios/studios.component");
var audio_component_1 = require("./audio-strap/audio.component");
var setup_component_1 = require("./setup/setup.component");
var tracker_component_1 = require("./tracker/tracker.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'pcs', component: pcs_component_1.PCSComponent },
                { path: 'cart', component: cart_component_1.CartComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'vivex', component: vivex_component_1.VivexComponent },
                { path: 'orders', component: orders_component_1.OrdersComponent },
                { path: 'product', component: product_component_1.ProductComponent },
                { path: 'studios', component: studios_component_1.StudiosComponent },
                { path: 'account', component: account_component_1.AccountComponent },
                { path: 'developers', component: developers_component_1.DevelopersComponent },
                { path: 'enterprise', component: enterprise_component_1.EnterpriseComponent },
                { path: 'accessories', component: accessories_component_1.AccessoriesComponent },
                { path: 'experiences', component: experiences_component_1.ExperiencesComponent },
                { path: 'installation', component: installation_component_1.InstallationComponent },
                { path: 'certification', component: certification_component_1.CertificationComponent },
                { path: 'dev-tracker', component: dev_tracker_component_1.DevTrackerComponent },
                { path: 'audio', component: audio_component_1.AudioStrapComponent },
                { path: 'setup', component: setup_component_1.SetupComponent },
                { path: 'tracker', component: tracker_component_1.TrackerComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
            ], { useHash: true })
        ],
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent,
            pcs_component_1.PCSComponent,
            home_component_1.HomeComponent,
            cart_component_1.CartComponent,
            vivex_component_1.VivexComponent,
            setup_component_1.SetupComponent,
            dev_nav_component_1.DevNavComponent,
            tracker_component_1.TrackerComponent,
            footer_component_1.FooterComponent,
            studios_component_1.StudiosComponent,
            orders_component_1.OrdersComponent,
            product_component_1.ProductComponent,
            account_component_1.AccountComponent,
            audio_component_1.AudioStrapComponent,
            developers_component_1.DevelopersComponent,
            enterprise_component_1.EnterpriseComponent,
            pc_carousel_component_1.PCCarouselComponent,
            product_nav_component_1.ProductNavComponent,
            dev_tracker_component_1.DevTrackerComponent,
            pc_carousel2_component_1.PCCarousel2Component,
            accessories_component_1.AccessoriesComponent,
            experiences_component_1.ExperiencesComponent,
            installation_component_1.InstallationComponent,
            carousel_component_1.HomeCarouselComponent,
            carousel2_component_1.HomeCarousel2Component,
            certification_component_1.CertificationComponent,
            product_carousel_component_1.ProductCarouselComponent,
            product_carousel2_component_1.ProductCarouselComponent2,
            product_carousel3_component_1.ProductCarouselComponent3,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map