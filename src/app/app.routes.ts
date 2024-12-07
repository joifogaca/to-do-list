import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
    data: { preload: true },
  },{
        path: 'altera-email',
        loadComponent: () => import('./profile/altera-email/altera-email.component').then(m => m.AlteraEmailComponent),
      }
];
