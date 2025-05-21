import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CardComponent } from "../../../base/components/card/card.component";

const IMPORTS = [CommonModule, CardComponent];
@Component({
    imports: [IMPORTS],
    standalone: true,
    selector: 'app-account-card',
    templateUrl: './account-card.component.html',
})
export class AccountCardComponent {
    @Input() type: string = "";
    @Input() institution: string = "";
    @Input() number: string = "";
    @Input() canDuplicate: boolean = false;
}