import { DebugElement } from '@angular/core';
export declare class CovalentTests {
    static confirmDialog(component: any): void;
    static clickDialogButton(component: any, buttonText: string): void;
    static getSnackBar(): Element;
    static getSnackBarTextContent(snackBarContainerElement: Element): string;
    static clickExpansionDownArrow(component: any, expansionContainer: DebugElement): void;
    static clearAllErrorDialogs(component: any): void;
    static checkForErrorDialogs(): boolean;
}
