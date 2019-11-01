import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule, MatProgressSpinnerModule, MatSortModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {TableModule} from 'primeng/table';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReportmanagementComponent } from './reportmanagement/reportmanagement.component';
import { BalepickupComponent } from './balepickup/balepickup.component';
import { IncidentmanagementComponent } from './incidentmanagement/incidentmanagement.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { StoragemanagementComponent } from './storagemanagement/storagemanagement.component';
import { MenuheaderComponent } from './menuheader/menuheader.component';
import{ StoremanagementService} from '../app/service/storemanagement.service';
import { TabsComponent } from './tabs/tabs.component';
import { LoginComponent } from './login/login.component';
import { PersonNamePipe } from './person-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReportmanagementComponent,
    BalepickupComponent,
    IncidentmanagementComponent,
    UsermanagementComponent,
    StoragemanagementComponent,
    MenuheaderComponent,
    TabsComponent,
    LoginComponent,
    PersonNamePipe
  ],
  
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSortModule,
     MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AccordionModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [StoremanagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
