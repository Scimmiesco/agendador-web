import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'horarios',
  },
  {
    path: 'horarios',
    loadComponent: () => import('./steps/horarios-disponiveis/horarios-disponiveis').then((m) => m.HorariosDisponiveis),
  }
]
