import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

const IMPORTS = [CommonModule]
@Component({
    imports: [IMPORTS],
    standalone: true,
    selector: "app-step",
    templateUrl: "./step.component.html",
})
export default class StepComponent {
    @Input() steps: { title: string, isSelected: boolean }[] = [];
    @Output() stepSelected = new EventEmitter();

    changeStep(step: { title: string, isSelected: boolean }) {
        this.steps.forEach((step) => (step.isSelected = false));
        step.isSelected = true;
        this.stepSelected.emit(step);
    }
}