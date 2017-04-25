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
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { TdPagingBarComponent } from './paging-bar.component';
export { TdPagingBarComponent } from './paging-bar.component';
var CovalentPagingModule = CovalentPagingModule_1 = (function () {
    function CovalentPagingModule() {
    }
    CovalentPagingModule.forRoot = function () {
        return {
            ngModule: CovalentPagingModule_1,
            providers: [],
        };
    };
    return CovalentPagingModule;
}());
CovalentPagingModule = CovalentPagingModule_1 = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            MaterialModule.forRoot(),
        ],
        declarations: [
            TdPagingBarComponent,
        ],
        exports: [
            TdPagingBarComponent,
        ],
    }),
    __metadata("design:paramtypes", [])
], CovalentPagingModule);
export { CovalentPagingModule };
var CovalentPagingModule_1;

//# sourceMappingURL=paging.module.js.map