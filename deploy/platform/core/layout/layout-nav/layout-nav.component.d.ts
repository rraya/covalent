import { EventEmitter } from '@angular/core';
import { TdLayoutService } from '../services/layout.service';
export declare class TdLayoutNavComponent {
    private layoutService;
    /**
     * title in toolbar
     */
    toolbarTitle: string;
    /**
     * icon for toolbar
     */
    icon: string;
    /**
     * logo file for toolbar
     */
    logo: string;
    /**
     * method thats called when menu is clicked
     */
    onOpenMenu: EventEmitter<void>;
    /**
     * title in toolbar
     * @deprecated since 0.9, use toolbarTitle instead
     */
    /**
     * title in toolbar
     * @deprecated since 0.9, use toolbarTitle instead
     */
    title: string;
    constructor(layoutService: TdLayoutService);
    menuClick(): void;
    /**
     * emits menuEvent
     */
    private _onMenuClick();
}
