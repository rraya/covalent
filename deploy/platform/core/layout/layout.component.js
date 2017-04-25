var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { TdLayoutService } from './services/layout.service';
var TdLayoutComponent = (function () {
    function TdLayoutComponent(layoutService) {
        var _this = this;
        this.layoutService = layoutService;
        this._showUserMenu = false;
        this._subcriptions = [];
        /**
         * method thats called when logout is clicked
         */
        this.onLogoutEvent = new EventEmitter();
        this._subcriptions.push(this.layoutService.registerSidenav('menu').subscribe(function () {
            _this.open();
        }));
    }
    Object.defineProperty(TdLayoutComponent.prototype, "title", {
        /**
         * title in sideNav menu
         * @deprecated since 0.9, use sidenavTitle instead
         */
        get: function () {
            return this.sidenavTitle;
        },
        /**
         * title in sideNav menu
         * @deprecated since 0.9, use sidenavTitle instead
         */
        set: function (title) {
            /* tslint:disable-next-line */
            console.warn("title is deprecated.  Please use sidenavTitle instead");
            this.sidenavTitle = title;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * removes subscriptions when destroyed
     */
    TdLayoutComponent.prototype.ngOnDestroy = function () {
        this._subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    /**
     * subscribes as observable to the onClose() event from the sideNav to hide userMenu when closed.
     */
    TdLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._subcriptions.push(this._sideNav.onClose.asObservable().subscribe(function () {
            _this._showUserMenu = false;
        }));
    };
    TdLayoutComponent.prototype.logoutClick = function () {
        this._onLogout();
    };
    /**
     * toggle userMenu to hide/show
     */
    TdLayoutComponent.prototype.toggleUserMenu = function () {
        this._showUserMenu = !this._showUserMenu;
    };
    TdLayoutComponent.prototype.isShowUserMenu = function () {
        return this._showUserMenu;
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.toggle = function () {
        this._sideNav.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.open = function () {
        this._sideNav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutComponent.prototype.close = function () {
        this._sideNav.close();
    };
    /**
     * emits logoutEvent
     */
    TdLayoutComponent.prototype._onLogout = function () {
        this.onLogoutEvent.emit(undefined);
    };
    return TdLayoutComponent;
}());
__decorate([
    ViewChild(MdSidenav),
    __metadata("design:type", MdSidenav)
], TdLayoutComponent.prototype, "_sideNav", void 0);
__decorate([
    Input('sidenavTitle'),
    __metadata("design:type", String)
], TdLayoutComponent.prototype, "sidenavTitle", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], TdLayoutComponent.prototype, "icon", void 0);
__decorate([
    Input('logo'),
    __metadata("design:type", String)
], TdLayoutComponent.prototype, "logo", void 0);
__decorate([
    Input('displayName'),
    __metadata("design:type", String)
], TdLayoutComponent.prototype, "displayName", void 0);
__decorate([
    Output('logout'),
    __metadata("design:type", EventEmitter)
], TdLayoutComponent.prototype, "onLogoutEvent", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdLayoutComponent.prototype, "title", null);
TdLayoutComponent = __decorate([
    Component({
        providers: [TdLayoutService],
        selector: 'td-layout',
        styleUrls: ['./layout.component.scss'],
        templateUrl: './layout.component.html',
    }),
    __metadata("design:paramtypes", [TdLayoutService])
], TdLayoutComponent);
export { TdLayoutComponent };

//# sourceMappingURL=layout.component.js.map
