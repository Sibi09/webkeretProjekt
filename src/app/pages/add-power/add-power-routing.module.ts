import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPowerComponent } from './add-power.component';

const routes: Routes = [
  { path: '', component: AddPowerComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPowerRoutingModule { }
