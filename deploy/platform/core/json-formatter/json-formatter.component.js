var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdCollapseAnimation } from '../common/common.module';
var TdJsonFormatterComponent = TdJsonFormatterComponent_1 = (function () {
    function TdJsonFormatterComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._open = false;
        this._levelsOpen = 0;
    }
    Object.defineProperty(TdJsonFormatterComponent.prototype, "levelsOpen", {
        get: function () {
            return this._levelsOpen;
        },
        /**
         * levelsOpen?: number
         * Levels opened by default when JS object is formatted and rendered.
         */
        set: function (levelsOpen) {
            if (!Number.isInteger(levelsOpen)) {
                throw '[levelsOpen] needs to be an integer.';
            }
            this._levelsOpen = levelsOpen;
            this._open = levelsOpen > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "open", {
        get: function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
        get: function () {
            var elipsis = this._key && this._key.length > TdJsonFormatterComponent_1.KEY_MAX_LENGTH ? '…' : '';
            return this._key ? this._key.substring(0, TdJsonFormatterComponent_1.KEY_MAX_LENGTH) + elipsis : this._key;
        },
        /**
         * key?: string
         * Tag to be displayed next to formatted object.
         */
        set: function (key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        /**
         * data: any
         * JS object to be formatted.
         */
        set: function (data) {
            this._data = data;
            this.parseChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes json-formatter and rerenders [data]
     */
    TdJsonFormatterComponent.prototype.refresh = function () {
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Workaround for https://github.com/angular/material2/issues/1825
     */
    TdJsonFormatterComponent.prototype.tooltipRefresh = function () {
        var _this = this;
        setTimeout(function () {
            _this.refresh();
        }, 100);
    };
    /**
     * Toggles collapse/expanded state of component.
     */
    TdJsonFormatterComponent.prototype.toggle = function () {
        this._open = !this._open;
    };
    TdJsonFormatterComponent.prototype.isObject = function () {
        return this.getType(this._data) === 'object';
    };
    TdJsonFormatterComponent.prototype.isArray = function () {
        return Array.isArray(this._data);
    };
    TdJsonFormatterComponent.prototype.hasChildren = function () {
        return this._children && this._children.length > 0;
    };
    /**
     * Gets parsed value depending on value type.
     */
    TdJsonFormatterComponent.prototype.getValue = function (value) {
        var type = this.getType(value);
        if (type === 'undefined' || (type === 'null')) {
            return type;
        }
        else if (type === 'date') {
            value = new Date(value).toString();
        }
        else if (type === 'string') {
            value = '"' + value + '"';
        }
        else if (type === 'function') {
            // Remove content of the function
            return value.toString()
                .replace(/[\r\n]/g, '')
                .replace(/\{.*\}/, '') + '{…}';
        }
        return value;
    };
    /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     */
    TdJsonFormatterComponent.prototype.getType = function (object) {
        if (typeof object === 'object') {
            if (!object) {
                return 'null';
            }
            var date = new Date(object);
            if (Object.prototype.toString.call(date) === '[object Date]') {
                if (!Number.isNaN(date.getTime())) {
                    return 'date';
                }
            }
        }
        return typeof object;
    };
    /**
     * Generates string representation depending if its an object or function.
     * see: http://stackoverflow.com/a/332429
     */
    TdJsonFormatterComponent.prototype.getObjectName = function () {
        var object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((object).constructor.toString());
        if (results && results.length > 1) {
            return results[1];
        }
        else {
            return '';
        }
    };
    /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     */
    TdJsonFormatterComponent.prototype.getPreview = function () {
        var _this = this;
        var previewData;
        var startChar = '{ ';
        var endChar = ' }';
        if (this.isArray()) {
            var previewArray = this._data.slice(0, TdJsonFormatterComponent_1.PREVIEW_LIMIT);
            previewData = previewArray.map(function (obj) {
                return _this.getValue(obj);
            });
            startChar = '[';
            endChar = ']';
        }
        else {
            var previewKeys = this._children.slice(0, TdJsonFormatterComponent_1.PREVIEW_LIMIT);
            previewData = previewKeys.map(function (key) {
                return key + ': ' + _this.getValue(_this._data[key]);
            });
        }
        var previewString = previewData.join(', ');
        var ellipsis = previewData.length >= TdJsonFormatterComponent_1.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent_1.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
        return startChar + previewString.substring(0, TdJsonFormatterComponent_1.PREVIEW_STRING_MAX_LENGTH) +
            ellipsis + endChar;
    };
    TdJsonFormatterComponent.prototype.parseChildren = function () {
        if (this.isObject()) {
            this._children = [];
            for (var key in this._data) {
                this._children.push(key);
            }
        }
    };
    return TdJsonFormatterComponent;
}());
/**
 * Max length for property names. Any names bigger than this get trunctated.
 */
TdJsonFormatterComponent.KEY_MAX_LENGTH = 30;
/**
 * Max length for preview string. Any names bigger than this get trunctated.
 */
TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH = 80;
/**
 * Max tooltip preview elements.
 */
TdJsonFormatterComponent.PREVIEW_LIMIT = 5;
__decorate([
    Input('levelsOpen'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TdJsonFormatterComponent.prototype, "levelsOpen", null);
__decorate([
    Input('key'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TdJsonFormatterComponent.prototype, "key", null);
__decorate([
    Input('data'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TdJsonFormatterComponent.prototype, "data", null);
TdJsonFormatterComponent = TdJsonFormatterComponent_1 = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'td-json-formatter',
        styleUrls: ['./json-formatter.component.scss'],
        templateUrl: './json-formatter.component.html',
        animations: [
            TdCollapseAnimation(),
        ],
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], TdJsonFormatterComponent);
export { TdJsonFormatterComponent };
var TdJsonFormatterComponent_1;

//# sourceMappingURL=json-formatter.component.js.map
