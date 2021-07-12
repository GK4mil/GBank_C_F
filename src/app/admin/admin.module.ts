import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';



@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'admindashboard', component : AdminPanelComponent},
      // {path: 'admin', component : AdmindashboardComponent},
    ])
  ]
})
export class AdminModule { }
