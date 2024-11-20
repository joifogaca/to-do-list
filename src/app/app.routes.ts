import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile-module.module').then(m => m.ProfileModuleModule),
    data: { preload: true }
  },
];
