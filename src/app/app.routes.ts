import { Routes } from '@angular/router';
import { Agendador } from './features/agendador/agendador';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agendar',
  },
  {
    path: 'agendar',
    component: Agendador,
    loadChildren: () => import('./features/agendador/agendador.routes').then((m) => m.routes),
  },
];
