var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdMediaService } from './services/media.service';
import { TdMediaToggleDirective } from './directives/media-toggle.directive';
var TD_MEDIA = [
    TdMediaToggleDirective,
];
export { TdMediaService, TdMediaToggleDirective };
var CovalentMediaModule = CovalentMediaModule_1 = (function () {
    function CovalentMediaModule() {
    }
    CovalentMediaModule.forRoot = function () {
        return {
            ngModule: CovalentMediaModule_1,
            providers: [TdMediaService],
        };
    };
    return CovalentMediaModule;
}());
CovalentMediaModule = CovalentMediaModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        declarations: [
            TD_MEDIA,
        ],
        exports: [
            CommonModule,
            TD_MEDIA,
        ],
    }),
    __metadata("design:paramtypes", [])
], CovalentMediaModule);
export { CovalentMediaModule };
var CovalentMediaModule_1;

//# sourceMappingURL=media.module.js.map
