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
import { Input } from '@angular/core';
var TdLayoutCardOverComponent = (function () {
    function TdLayoutCardOverComponent() {
        /**
         * card flex width %
         */
        this.cardWidth = 70;
    }
    Object.defineProperty(TdLayoutCardOverComponent.prototype, "title", {
        /**
         * title in card
         * @deprecated since 0.9, use cardTitle instead
         */
        get: function () {
            return this.cardTitle;
        },
        /**
         * title in card
         * @deprecated since 0.9, use cardTitle instead
         */
        set: function (title) {
            /* tslint:disable-next-line */
            console.warn("title is deprecated.  Please use cardTitle instead");
            this.cardTitle = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLayoutCardOverComponent.prototype, "subtitle", {
        /**
         * subtitle in card
         * @deprecated since 0.9, use cardSubtitle instead
         */
        get: function () {
            return this.cardSubtitle;
        },
        /**
         * subtitle in card
         * @deprecated since 0.9, use cardSubtitle instead
         */
        set: function (subtitle) {
            /* tslint:disable-next-line */
            console.warn("subtitle is deprecated.  Please use cardSubtitle instead");
            this.cardSubtitle = subtitle;
        },
        enumerable: true,
        configurable: true
    });
    return TdLayoutCardOverComponent;
}());
__decorate([
    Input('cardTitle'),
    __metadata("design:type", String)
], TdLayoutCardOverComponent.prototype, "cardTitle", void 0);
__decorate([
    Input('cardSubtitle'),
    __metadata("design:type", String)
], TdLayoutCardOverComponent.prototype, "cardSubtitle", void 0);
__decorate([
    Input('cardWidth'),
    __metadata("design:type", Number)
], TdLayoutCardOverComponent.prototype, "cardWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdLayoutCardOverComponent.prototype, "title", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdLayoutCardOverComponent.prototype, "subtitle", null);
TdLayoutCardOverComponent = __decorate([
    Component({
        selector: 'td-layout-card-over',
        styleUrls: ['./layout-card-over.component.scss'],
        templateUrl: './layout-card-over.component.html',
    }),
    __metadata("design:paramtypes", [])
], TdLayoutCardOverComponent);
export { TdLayoutCardOverComponent };

//# sourceMappingURL=layout-card-over.component.js.map
