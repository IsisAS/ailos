import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingCircleComponent } from '../../base/components/loading-circle/loading-circle.component';
import { CardComponent } from '../../base/components/card/card.component';
import { SearchCooperatorInterface } from './search-cooperator.interface';
import { SearchCooperatorService } from './search-cooperator.service';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AccountCardComponent } from './account-card/account-card.component';

const IMPORTS = [CommonModule, FormsModule, LoadingCircleComponent, CardComponent, AccountCardComponent];

@Component({
  imports: [IMPORTS],
  standalone: true,
  selector: 'app-search-cooperator',
  templateUrl: './search-cooperator.component.html',
})
export class SearchCooperatorComponent {
  loading: boolean = false;
  cpf: string = '';
  coperator: SearchCooperatorInterface | undefined;

  constructor(
    private readonly searchCooperatorService: SearchCooperatorService,
    private readonly toastService: ToastrService
  ) { }

  searchCooperator() {
    this.loading = true;

    this.searchCooperatorService.
      findByCpf(this.cpf)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        {
          next: response => {
            if (response) {
              this.coperator = response;
            }
          },
          error: (error) => {
            console.log(error);
            this.toastService.error(error);
          }
        }
      )
  }
}
