var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { StepState } from '../step.component';
var TdStepHeaderComponent = (function () {
    function TdStepHeaderComponent() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepHeaderComponent.prototype.isComplete = function () {
        return this.state === StepState.Complete;
    };
    ;
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    TdStepHeaderComponent.prototype.isRequired = function () {
        return this.state === StepState.Required;
    };
    ;
    return TdStepHeaderComponent;
}());
__decorate([
    Input('number'),
    __metadata("design:type", Number)
], TdStepHeaderComponent.prototype, "number", void 0);
__decorate([
    Input('active'),
    __metadata("design:type", Boolean)
], TdStepHeaderComponent.prototype, "active", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], TdStepHeaderComponent.prototype, "disabled", void 0);
__decorate([
    Input('state'),
    __metadata("design:type", Number)
], TdStepHeaderComponent.prototype, "state", void 0);
TdStepHeaderComponent = __decorate([
    Component({
        selector: 'td-step-header',
        styleUrls: ['./step-header.component.scss'],
        templateUrl: './step-header.component.html',
    }),
    __metadata("design:paramtypes", [])
], TdStepHeaderComponent);
export { TdStepHeaderComponent };

//# sourceMappingURL=step-header.component.js.map
