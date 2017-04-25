var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, Input, Renderer } from '@angular/core';
/* tslint:disable-next-line */
var hljs = require('highlight.js/lib');
var TdHighlightComponent = (function () {
    function TdHighlightComponent(renderer) {
        this.renderer = renderer;
        this.language = 'javascript';
    }
    TdHighlightComponent.prototype.ngAfterViewInit = function () {
        if (!this.language) {
            throw 'Error: language attribute must be defined in TdHighlightComponent.';
        }
        var codeElement = this.content.nativeElement;
        var code = codeElement.innerHTML;
        this.renderer.detachView([].slice.call(codeElement.childNodes));
        this.render(code, codeElement);
    };
    TdHighlightComponent.prototype.render = function (contents, codeElement) {
        var lines = contents.split('\n');
        // Remove empty lines
        lines = lines.filter(function (line) {
            return line.trim().length > 0;
        });
        // Make it so each line starts at 0 whitespace
        var firstLineWhitespace = lines[0].match(/^\s*/)[0];
        var startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
        lines = lines.map(function (line) {
            return line
                .replace('=""', '') // remove empty values
                .replace(startingWhitespaceRegex, '')
                .replace(/\s+$/, '');
        });
        this.renderer.setElementClass(codeElement, 'highlight', true);
        var codeToParse = lines.join('\n')
            .replace(/\{ \{/gi, '{{').replace(/\} \}/gi, '}}')
            .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>'); // replace with < and > to render HTML in angular 2
        if (this.language === 'html') {
            this.renderer.createText(codeElement, codeToParse, undefined);
            hljs.highlightBlock(codeElement);
        }
        else {
            var highlightedCode = hljs.highlight(this.language, codeToParse, true);
            highlightedCode.value = highlightedCode.value
                .replace(/=<span class="hljs-value">""<\/span>/gi, '')
                .replace('<head>', '')
                .replace('<head/>', '');
            codeElement.innerHTML = highlightedCode.value;
        }
    };
    return TdHighlightComponent;
}());
__decorate([
    Input('lang'),
    __metadata("design:type", String)
], TdHighlightComponent.prototype, "language", void 0);
__decorate([
    ViewChild('highlight'),
    __metadata("design:type", ElementRef)
], TdHighlightComponent.prototype, "content", void 0);
TdHighlightComponent = __decorate([
    Component({
        selector: 'td-highlight',
        styleUrls: ['./highlight.component.scss'],
        templateUrl: './highlight.component.html',
    }),
    __metadata("design:paramtypes", [Renderer])
], TdHighlightComponent);
export { TdHighlightComponent };

//# sourceMappingURL=highlight.component.js.map
