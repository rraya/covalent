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
import { MaterialModule } from '@angular/material';
import { TdLayoutComponent } from './layout.component';
import { TdLayoutNavComponent } from './layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout-nav-list/layout-nav-list.component';
import { TdLayoutCardOverComponent } from './layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout-manage-list/layout-manage-list.component';
import { TdLayoutFooterComponent } from './layout-footer/layout-footer.component';
import { TdLayoutService } from './services/layout.service';
var TD_LAYOUTS = [
    TdLayoutComponent,
    TdLayoutNavComponent,
    TdLayoutNavListComponent,
    TdLayoutCardOverComponent,
    TdLayoutManageListComponent,
    TdLayoutFooterComponent,
];
export { TdLayoutComponent, TdLayoutNavComponent, TdLayoutNavListComponent, TdLayoutCardOverComponent, TdLayoutManageListComponent, TdLayoutFooterComponent };
var CovalentLayoutModule = CovalentLayoutModule_1 = (function () {
    function CovalentLayoutModule() {
    }
    CovalentLayoutModule.forRoot = function () {
        return {
            ngModule: CovalentLayoutModule_1,
            providers: [TdLayoutService],
        };
    };
    return CovalentLayoutModule;
}());
CovalentLayoutModule = CovalentLayoutModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MaterialModule.forRoot(),
        ],
        declarations: [
            TD_LAYOUTS,
        ],
        exports: [
            CommonModule,
            MaterialModule,
            TD_LAYOUTS,
        ],
    }),
    __metadata("design:paramtypes", [])
], CovalentLayoutModule);
export { CovalentLayoutModule };
var CovalentLayoutModule_1;

//# sourceMappingURL=layout.module.js.map
