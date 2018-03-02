import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Viewer3dComponent } from './viewer3d.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Viewer3dComponent],
  exports:[
    Viewer3dComponent
  ]
})
export class Viewer3dModule {}
