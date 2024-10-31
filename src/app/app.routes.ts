import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'unoeste-inicio',
        pathMatch: 'full'
    },
    {
        path: 'unoeste-inicio',
        loadComponent: () => import('./pages/inicio/inicio.component').then(c => c.InicioComponent)
    }
];
