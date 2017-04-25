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
import { Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { TdLayoutService } from '../services/layout.service';
var TdLayoutManageListComponent = (function () {
    function TdLayoutManageListComponent(layoutService) {
        this.layoutService = layoutService;
        /**
         * method thats called when menu is clicked
         */
        this.onOpenMenu = new EventEmitter();
    }
    TdLayoutManageListComponent.prototype.menuClick = function () {
        this._onMenuClick();
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.toggle = function () {
        this._sideNav.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.open = function () {
        this._sideNav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.close = function () {
        this._sideNav.close();
    };
    /**
     * emits menuEvent
     */
    TdLayoutManageListComponent.prototype._onMenuClick = function () {
        this.onOpenMenu.emit(undefined);
        this.layoutService.openSideNav('menu');
    };
    return TdLayoutManageListComponent;
}());
__decorate([
    ViewChild(MdSidenav),
    __metadata("design:type", MdSidenav)
], TdLayoutManageListComponent.prototype, "_sideNav", void 0);
__decorate([
    Output('openMenu'),
    __metadata("design:type", EventEmitter)
], TdLayoutManageListComponent.prototype, "onOpenMenu", void 0);
TdLayoutManageListComponent = __decorate([
    Component({
        selector: 'td-layout-manage-list',
        styleUrls: ['./layout-manage-list.component.scss'],
        templateUrl: './layout-manage-list.component.html',
    }),
    __metadata("design:paramtypes", [TdLayoutService])
], TdLayoutManageListComponent);
export { TdLayoutManageListComponent };

//# sourceMappingURL=layout-manage-list.component.js.map
