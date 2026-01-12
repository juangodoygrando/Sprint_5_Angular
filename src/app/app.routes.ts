import { Routes } from '@angular/router';
import { CreatePlanPageComponent } from './features/create-plan/pages/create-plan-page/create-plan-page.component';

export const routes: Routes = [
  {
    path: 'create-plan',
    component: CreatePlanPageComponent,
  },
  {
    path: '**',
    redirectTo: '/create-plan',
  },
];
