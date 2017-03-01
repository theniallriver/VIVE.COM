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
var mainSvc_injectable_1 = require("../services/mainSvc.injectable");
var NavComponent = (function () {
    function NavComponent(_mainService) {
        this._mainService = _mainService;
        this.showMenu = false;
    }
    NavComponent.prototype.showUserMenu = function () {
        this.showMenu = !this.showMenu;
    };
    NavComponent.prototype.ngOnInit = function () {
        this.loggedIn = this._mainService.getUserInfo()
            .map(function (res) {
            this.userInfo = JSON.parse(res._body);
            if (this.userInfo.first_name) {
                console.log('loggedin?' + this.loggedIn);
                return true;
            }
            else {
                console.log('loggedin?' + this.loggedIn);
                return false;
            }
        });
        this.proPic = this._mainService.getUserInfo()
            .map(function (res) {
            this.userInfo = JSON.parse(res._body);
            this.userName = this.userInfo.first_name + this.userInfo.last_name;
            return this.userInfo.picture_url;
        });
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: 'vive-nav',
        templateUrl: 'app/navbar/nav.component.html',
        styleUrls: ['app/navbar/nav.component.css'],
        providers: [mainSvc_injectable_1.MainService]
    }),
    __metadata("design:paramtypes", [mainSvc_injectable_1.MainService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map