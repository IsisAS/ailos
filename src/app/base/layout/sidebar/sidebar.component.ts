import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MenuStateService } from "../../services/menu-state.service";
import { Router } from "@angular/router";
import { MenuListInterface } from "../../services/menu-state.interface";

const IMPORTS = [CommonModule];

@Component({
    imports: [IMPORTS],
    standalone: true,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})
export class SideBarComponent {
    constructor(
        public menuStateService: MenuStateService,
        private router: Router
    ) { }

    navigateMenu(menu: MenuListInterface) {
        menu.isActive = true;
        this.router.navigate([menu.route]);
    }
}
