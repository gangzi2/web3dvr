

import { Routes } from '@angular/router';
 

export const appRoutes: Routes = [
    { path: 'create', 
      component: CreateComponent 
    },
    {
      path: 'edit/:id',
      component: EditComponent
    },
    { path: 'index',
      component: IndexComponent
    }
  ];