
 
import { Routes } from '@angular/router';
import { AuthentictionComponent } from './authentiction/authentiction.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AuthentictionComponent },
];
export const appRoutes: Routes = [
    { path: 'home', 
      component: AuthentictionComponent 
    }
  ]