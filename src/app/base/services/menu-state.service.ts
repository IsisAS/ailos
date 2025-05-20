import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MenuListInterface } from "./menu-state.interface";
import { menu } from "../../data/menu/menu.mock";

@Injectable({
    providedIn: 'root'
})
export class MenuStateService {
    private _isOpen = new BehaviorSubject<boolean>(false);
    isOpen$ = this._isOpen.asObservable();

    private _menuList = new BehaviorSubject<MenuListInterface[]>([]);
    menuList$ = this._menuList.asObservable();

    constructor() {
        this.setMenuList();
    }

    toggleMenu() {
        this._isOpen.next(!this._isOpen.value);
    }

    setMenuList() {
        this._menuList.next(menu as MenuListInterface[]);
    }

    getMenuList(): MenuListInterface[] {
        return this._menuList.value;
    }
}