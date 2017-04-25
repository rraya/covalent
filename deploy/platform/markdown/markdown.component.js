var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
var TdMarkdownComponent = (function () {
    function TdMarkdownComponent() {
    }
    TdMarkdownComponent.prototype.ngAfterViewInit = function () {
        var code = this.content.nativeElement.innerText;
        this.content.nativeElement.innerHTML = this.render(code);
    };
    TdMarkdownComponent.prototype.render = function (contents) {
        var converter = new showdown.Converter();
        converter.setOption('ghCodeBlocks', true);
        converter.setOption('tasklists', true);
        var html = converter.makeHtml(contents);
        return html;
    };
    return TdMarkdownComponent;
}());
__decorate([
    ViewChild('markdown'),
    __metadata("design:type", ElementRef)
], TdMarkdownComponent.prototype, "content", void 0);
TdMarkdownComponent = __decorate([
    Component({
        selector: 'td-markdown',
        styleUrls: ['./markdown.component.scss'],
        templateUrl: './markdown.component.html',
    }),
    __metadata("design:paramtypes", [])
], TdMarkdownComponent);
export { TdMarkdownComponent };

//# sourceMappingURL=markdown.component.js.map
