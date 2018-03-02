import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
//import { appRoutes  } from './routerConfig';
import { AuthentictionComponent } from './authentiction.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    AuthentictionComponent
  ],
  exports:[
    HeaderComponent,
    AuthentictionComponent
  ]
})
export class AuthentictionModule{ }
