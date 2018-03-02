
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatMenuModule,MatInputModule, MatProgressSpinnerModule,MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule
 ],
  exports: [MatButtonModule,MatToolbarModule,MatMenuModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatIconModule ],
})
export class MaterialModule { }