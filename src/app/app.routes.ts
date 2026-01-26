import { Routes } from '@angular/router';
import { CreatePlanPageComponent } from './features/create-plan/pages/create-plan-page/create-plan-page.component';
import { HomePageComponent } from './features/home/page/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'create-plan',
    component: CreatePlanPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
