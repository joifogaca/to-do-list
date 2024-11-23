import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.component').then(m => m.ProfileComponent),
    data: { preload: true }
  },
];
