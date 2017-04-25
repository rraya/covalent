var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var TdFileUploadComponent = (function () {
    function TdFileUploadComponent() {
        this._multiple = false;
        this._disabled = false;
        /**
         * defaultColor?: string
         * Sets browse button color. Uses same color palette accepted as [mdButton] and defaults to 'primary'.
         */
        this.defaultColor = 'primary';
        /**
         * activeColor?: string
         * Sets upload button color. Uses same color palette accepted as [mdButton] and defaults to 'accent'.
         */
        this.activeColor = 'accent';
        /**
         * cancelColor?: string
         * Sets cancel button color. Uses same color palette accepted as [mdButton] and defaults to 'warn'.
         */
        this.cancelColor = 'warn';
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        this.onUpload = new EventEmitter();
    }
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         */
        set: function (multiple) {
            this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * disabled?: boolean
         * Disables [TdFileUploadComponent] and clears selected/dropped files.
         */
        set: function (disabled) {
            if (disabled) {
                this.cancel();
            }
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when upload button is clicked.
     */
    TdFileUploadComponent.prototype.uploadPressed = function () {
        if (this.files) {
            this.onUpload.emit(this.files);
        }
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    TdFileUploadComponent.prototype.cancel = function () {
        this.files = undefined;
    };
    return TdFileUploadComponent;
}());
__decorate([
    Input('defaultColor'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "defaultColor", void 0);
__decorate([
    Input('activeColor'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "activeColor", void 0);
__decorate([
    Input('cancelColor'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "cancelColor", void 0);
__decorate([
    Input('multiple'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdFileUploadComponent.prototype, "multiple", null);
__decorate([
    Input('accept'),
    __metadata("design:type", String)
], TdFileUploadComponent.prototype, "accept", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TdFileUploadComponent.prototype, "disabled", null);
__decorate([
    Output('upload'),
    __metadata("design:type", EventEmitter)
], TdFileUploadComponent.prototype, "onUpload", void 0);
TdFileUploadComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'td-file-upload',
        styleUrls: ['./file-upload.component.scss'],
        templateUrl: './file-upload.component.html',
    }),
    __metadata("design:paramtypes", [])
], TdFileUploadComponent);
export { TdFileUploadComponent };

//# sourceMappingURL=file-upload.component.js.map
