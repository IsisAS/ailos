import { Injectable } from "@angular/core";
import { SearchCooperatorInterface } from "./search-cooperator.interface";
import { COOPERATORS } from "../../data/cooperator/cooperator.mock";
import { Observable, of, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SearchCooperatorService {

    findByCpf(cpf: string): Observable<SearchCooperatorInterface | undefined> {
        const result = COOPERATORS.find(c => c.cpf === cpf.replace(/\D/g, ''));

        if (!result) {
            return throwError(() => new Error('Cooperado não encontrado'));
        }

        return of(result);
    }
}