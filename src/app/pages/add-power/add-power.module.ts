import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPowerRoutingModule } from './add-power-routing.module';
import { AddPowerComponent } from './add-power.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddPowerComponent
  ],
  imports: [
    CommonModule,
    AddPowerRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AddPowerModule { }
