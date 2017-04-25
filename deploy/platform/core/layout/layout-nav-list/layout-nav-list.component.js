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
import { TdLayoutService } from '../services/layout.service';
var TdLayoutNavListComponent = (function () {
    function TdLayoutNavListComponent(layoutService) {
        this.layoutService = layoutService;
        /**
         * method thats called when menu is clicked
         */
        this.onOpenMenu = new EventEmitter();
    }
    Object.defineProperty(TdLayoutNavListComponent.prototype, "title", {
        /**
         * title in toolbar
         * @deprecated since 0.9, use toolbarTitle instead
         */
        get: function () {
            return this.toolbarTitle;
        },
        /**
         * title in toolbar
         * @deprecated since 0.9, use toolbarTitle instead
         */
        set: function (title) {
            /* tslint:disable-next-line */
            console.warn("title is deprecated.  Please use toolbarTitle instead");
            this.toolbarTitle = title;
        },
        enumerable: true,
        configurable: true
    });
    TdLayoutNavListComponent.prototype.menuClick = function () {
        this._onMenuClick();
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.toggle = function () {
        this._sideNav.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.open = function () {
        this._sideNav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutNavListComponent.prototype.close = function () {
        this._sideNav.close();
    };
    /**
     * emits menuEvent
     */
    TdLayoutNavListComponent.prototype._onMenuClick = function () {
        this.onOpenMenu.emit(undefined);
        this.layoutService.openSideNav('menu');
    };
    return TdLayoutNavListComponent;
}());
__decorate([
    Input('toolbarTitle'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "toolbarTitle", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "icon", void 0);
__decorate([
    Input('logo'),
    __metadata("design:type", String)
], TdLayoutNavListComponent.prototype, "logo", void 0);
__decorate([
    ViewChild(MdSidenav),
    __metadata("design:type", MdSidenav)
], TdLayoutNavListComponent.prototype, "_sideNav", void 0);
__decorate([
    Output('openMenu'),
    __metadata("design:type", EventEmitter)
], TdLayoutNavListComponent.prototype, "onOpenMenu", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdLayoutNavListComponent.prototype, "title", null);
TdLayoutNavListComponent = __decorate([
    Component({
        selector: 'td-layout-nav-list',
        styleUrls: ['./layout-nav-list.component.scss'],
        templateUrl: './layout-nav-list.component.html',
    }),
    __metadata("design:paramtypes", [TdLayoutService])
], TdLayoutNavListComponent);
export { TdLayoutNavListComponent };

//# sourceMappingURL=layout-nav-list.component.js.map
