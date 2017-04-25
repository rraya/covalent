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
import { MdDialogRef } from '@angular/material';
var TdPromptDialogComponent = (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdPromptDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(undefined);
    };
    TdPromptDialogComponent.prototype.accept = function () {
        this._dialogRef.close(this.value);
    };
    return TdPromptDialogComponent;
}());
TdPromptDialogComponent = __decorate([
    Component({
        selector: 'td-prompt-dialog',
        templateUrl: './prompt-dialog.component.html',
        styleUrls: ['./prompt-dialog.component.scss'],
    }),
    __metadata("design:paramtypes", [MdDialogRef])
], TdPromptDialogComponent);
export { TdPromptDialogComponent };

//# sourceMappingURL=prompt-dialog.component.js.map
