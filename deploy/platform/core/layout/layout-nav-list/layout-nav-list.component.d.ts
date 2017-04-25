import { EventEmitter } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { TdLayoutService } from '../services/layout.service';
export declare class TdLayoutNavListComponent {
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
    _sideNav: MdSidenav;
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
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    toggle(): void;
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    open(): void;
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    close(): void;
    /**
     * emits menuEvent
     */
    private _onMenuClick();
}
