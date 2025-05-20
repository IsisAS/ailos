import { Routes } from '@angular/router';
import { MainLayoutComponent } from './base/layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'search-cooperator',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'search-cooperator',
                loadComponent: () => import('./core/search-cooperator/search-cooperator.component')
                    .then(m => m.SearchCooperatorComponent),
            },
            {
                path: '**',
                loadComponent: () => import('./base/components/not-found/not-found.component')
                    .then(m => m.NotFoundComponent),
            }
        ]
    }
];
