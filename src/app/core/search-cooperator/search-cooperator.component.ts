import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingCircleComponent } from '../../base/components/loading-circle/loading-circle.component';

const IMPORTS = [CommonModule, FormsModule, LoadingCircleComponent];

@Component({
  imports: [IMPORTS],
  standalone: true,
  selector: 'app-search-cooperator',
  templateUrl: './search-cooperator.component.html',
})
export class SearchCooperatorComponent {
  loading: boolean = false;
  cpf: string = '';


  searchCooperator() {
    this.loading = true;
    console.log("ENTROU")
    setTimeout(() => {
      this.loading = false;
      // Handle the response here
    }, 2000);
  }
}
