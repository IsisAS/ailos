import { Component } from "@angular/core";
import { MenuStateService } from "../../services/menu-state.service";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const IMPORTS = [MatDialogModule];

@Component({
    imports: [IMPORTS],
    standalone: true,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    constructor(private menuStateService: MenuStateService, private dialog: MatDialog) { }

    toogleMenu() {
        this.menuStateService.toggleMenu();
    }
}