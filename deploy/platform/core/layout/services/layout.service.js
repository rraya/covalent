var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var TdLayoutService = (function () {
    function TdLayoutService() {
        this._openSidenavSources = {};
        this._openSidenavObservables = {};
    }
    TdLayoutService.prototype.registerSidenav = function (name) {
        if (this._openSidenavSources[name]) {
            throw 'Sidenav already registered with that name';
        }
        this._openSidenavSources[name] = new Subject();
        this._openSidenavObservables[name] = this._openSidenavSources[name].asObservable();
        return this._openSidenavObservables[name];
    };
    TdLayoutService.prototype.openSideNav = function (name) {
        if (this._openSidenavSources[name]) {
            this._openSidenavSources[name].next(undefined);
        }
    };
    return TdLayoutService;
}());
TdLayoutService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], TdLayoutService);
export { TdLayoutService };

//# sourceMappingURL=layout.service.js.map
