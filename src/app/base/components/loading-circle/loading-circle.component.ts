import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

const IMPORTS = [CommonModule];

@Component({
	imports: [IMPORTS],
	standalone: true,
	selector: 'app-loading-circle',
	templateUrl: './loading-circle.component.html',
	styleUrls: ['./loading-circle.component.scss'],
})
export class LoadingCircleComponent implements OnInit, OnDestroy {
	@Input() loading: boolean = false;
	@Input() color: string = '';
	@Input() size: 'medium' | 'mini' = 'medium';
	
	ngOnInit(): void {
		if (this.color) {
			document.documentElement.style.setProperty('--loader-color', this.color);
		}
	}

	ngOnDestroy(): void {
		document.documentElement.style.removeProperty('--loader-color');
	}
}