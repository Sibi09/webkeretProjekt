import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerRoutingModule } from './power-routing.module';
import { PowerComponent } from './power.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PowerComponent
  ],
  imports: [
    CommonModule,
    PowerRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class PowerModule { }
