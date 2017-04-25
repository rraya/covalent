var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { TdSearchInputComponent } from '../search-input/search-input.component';
var TdSearchBoxComponent = (function () {
    function TdSearchBoxComponent() {
        this._searchVisible = false;
        /**
         * backIcon?: string
         * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
         * Defaults to 'search' icon.
         */
        this.backIcon = 'search';
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         */
        this.showUnderline = false;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         */
        this.debounce = 400;
        /**
         * alwaysVisible?: boolean
         * Sets if the input should always be visible. Defaults to 'false'.
         */
        this.alwaysVisible = false;
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         */
        this.onSearchDebounce = new EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        this.onSearch = new EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        this.onClear = new EventEmitter();
    }
    Object.defineProperty(TdSearchBoxComponent.prototype, "value", {
        get: function () {
            return this._searchInput.value;
        },
        set: function (value) {
            this._searchInput.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
        get: function () {
            return this._searchVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when the search icon is clicked.
     */
    TdSearchBoxComponent.prototype.searchClicked = function () {
        if (this.alwaysVisible || !this._searchVisible) {
            this._searchInput.focus();
        }
        this.toggleVisibility();
    };
    TdSearchBoxComponent.prototype.toggleVisibility = function () {
        this._searchVisible = !this._searchVisible;
    };
    TdSearchBoxComponent.prototype.handleSearchDebounce = function (value) {
        this.onSearchDebounce.emit(value);
    };
    TdSearchBoxComponent.prototype.handleSearch = function (value) {
        this.onSearch.emit(value);
    };
    TdSearchBoxComponent.prototype.handleClear = function () {
        this.onClear.emit(undefined);
    };
    return TdSearchBoxComponent;
}());
__decorate([
    ViewChild(TdSearchInputComponent),
    __metadata("design:type", TdSearchInputComponent)
], TdSearchBoxComponent.prototype, "_searchInput", void 0);
__decorate([
    Input('backIcon'),
    __metadata("design:type", String)
], TdSearchBoxComponent.prototype, "backIcon", void 0);
__decorate([
    Input('showUnderline'),
    __metadata("design:type", Boolean)
], TdSearchBoxComponent.prototype, "showUnderline", void 0);
__decorate([
    Input('debounce'),
    __metadata("design:type", Number)
], TdSearchBoxComponent.prototype, "debounce", void 0);
__decorate([
    Input('alwaysVisible'),
    __metadata("design:type", Boolean)
], TdSearchBoxComponent.prototype, "alwaysVisible", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", String)
], TdSearchBoxComponent.prototype, "placeholder", void 0);
__decorate([
    Output('searchDebounce'),
    __metadata("design:type", EventEmitter)
], TdSearchBoxComponent.prototype, "onSearchDebounce", void 0);
__decorate([
    Output('search'),
    __metadata("design:type", EventEmitter)
], TdSearchBoxComponent.prototype, "onSearch", void 0);
__decorate([
    Output('clear'),
    __metadata("design:type", EventEmitter)
], TdSearchBoxComponent.prototype, "onClear", void 0);
TdSearchBoxComponent = __decorate([
    Component({
        selector: 'td-search-box',
        templateUrl: './search-box.component.html',
        styleUrls: ['./search-box.component.scss'],
        animations: [
            trigger('inputState', [
                state('false', style({
                    width: '0%',
                    'margin-left': '0px',
                })),
                state('true', style({
                    width: '100%',
                    'margin-left': '*',
                })),
                transition('0 => 1', animate('200ms ease-in')),
                transition('1 => 0', animate('200ms ease-out')),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [])
], TdSearchBoxComponent);
export { TdSearchBoxComponent };

//# sourceMappingURL=search-box.component.js.map
