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
import StepComponent from '../../base/components/step/step.component';
import { Event } from '@angular/router';

const IMPORTS = [
  CommonModule,
  FormsModule,
  LoadingCircleComponent,
  CardComponent,
  AccountCardComponent,
  StepComponent
];

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
  steps: { title: string, isSelected: boolean }[] = [
    { title: 'Inicio', isSelected: true },
    { title: 'Documentos', isSelected: false },
    { title: 'Dados Cadastrais', isSelected: false },
    { title: 'Admissão', isSelected: false },
  ];

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

  nextStep(event: Event){
    console.log(event);
  }
}
