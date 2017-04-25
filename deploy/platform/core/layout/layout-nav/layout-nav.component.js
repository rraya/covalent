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
import { TdLayoutService } from '../services/layout.service';
var TdLayoutNavComponent = (function () {
    function TdLayoutNavComponent(layoutService) {
        this.layoutService = layoutService;
        /**
         * method thats called when menu is clicked
         */
        this.onOpenMenu = new EventEmitter();
    }
    Object.defineProperty(TdLayoutNavComponent.prototype, "title", {
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
    TdLayoutNavComponent.prototype.menuClick = function () {
        this._onMenuClick();
    };
    /**
     * emits menuEvent
     */
    TdLayoutNavComponent.prototype._onMenuClick = function () {
        this.onOpenMenu.emit(undefined);
        this.layoutService.openSideNav('menu');
    };
    return TdLayoutNavComponent;
}());
__decorate([
    Input('toolbarTitle'),
    __metadata("design:type", String)
], TdLayoutNavComponent.prototype, "toolbarTitle", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], TdLayoutNavComponent.prototype, "icon", void 0);
__decorate([
    Input('logo'),
    __metadata("design:type", String)
], TdLayoutNavComponent.prototype, "logo", void 0);
__decorate([
    Output('openMenu'),
    __metadata("design:type", EventEmitter)
], TdLayoutNavComponent.prototype, "onOpenMenu", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdLayoutNavComponent.prototype, "title", null);
TdLayoutNavComponent = __decorate([
    Component({
        selector: 'td-layout-nav',
        styleUrls: ['./layout-nav.component.scss'],
        templateUrl: './layout-nav.component.html',
    }),
    __metadata("design:paramtypes", [TdLayoutService])
], TdLayoutNavComponent);
export { TdLayoutNavComponent };

//# sourceMappingURL=layout-nav.component.js.map
