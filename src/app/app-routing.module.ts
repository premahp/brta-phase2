import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoragemanagementComponent } from './storagemanagement/storagemanagement.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { IncidentmanagementComponent } from './incidentmanagement/incidentmanagement.component';
import { BalepickupComponent } from './balepickup/balepickup.component';
import { ReportmanagementComponent } from './reportmanagement/reportmanagement.component';



const routes: Routes = [ 
  { path:  '', redirectTo:  'storemanagement', pathMatch:  'full' },
  { path: 'storemanagement', component: StoragemanagementComponent },
  { path: 'usermanagement', component: UsermanagementComponent },
  { path: 'incidentmanagement', component: IncidentmanagementComponent },
  { path: 'balepickup', component: BalepickupComponent },
  { path: 'reportmanagement', component: ReportmanagementComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
