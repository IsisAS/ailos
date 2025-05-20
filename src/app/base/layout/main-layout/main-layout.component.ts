import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideBarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { MenuStateService } from "../../services/menu-state.service";

const IMPORTS = [CommonModule, NavbarComponent, SideBarComponent, RouterOutlet];

@Component({
    imports: [IMPORTS],
    standalone: true,
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
    constructor(public stateMenuService: MenuStateService) {

    }
}