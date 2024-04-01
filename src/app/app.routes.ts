import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadComponent: () => import('./components/editor/editor.component').then(m => m.EditorComponent)
},
{
  path: '**',
  redirectTo: ''
}];
