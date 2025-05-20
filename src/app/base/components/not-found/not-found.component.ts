import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

const IMPORTS = [CommonModule];

@Component({
    imports: [IMPORTS],
    standalone: true,
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
})
export class NotFoundComponent{

}