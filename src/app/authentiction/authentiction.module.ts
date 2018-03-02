import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { appRoutes  } from './routerConfig';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class AuthentictionModule{ }
