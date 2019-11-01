import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
//import { StoremanagementService } from '../storemanagement-.service';
import { StoremanagementService } from '../service/storemanagement.service';

@Component({
  selector: 'app-storagemanagement',
  templateUrl: './storagemanagement.component.html',
  styleUrls: ['./storagemanagement.component.css']
})
export class StoragemanagementComponent implements OnInit {
  buyCustomers = []; 
  customers = []; 
  states=[];
  dataSource; 
  cols: any[]; 
  birthday = new Date(1988, 3, 15);
  add(a :number, b :number):number{  
    return a*b;
  }
  
  displayedColumns: string[] = ['customerName','siteName', 'address','address3'];
  

  constructor(private storemanagementService: StoremanagementService) {
   }
  ngOnInit() { 
    this.storemanagementService.getCustomers().subscribe((data)=>{
      this.customers = data;
      //console.log("========="+ JSON.stringify(data))
      err=>{console.log(err)}
    });

    this.storemanagementService.getStates().subscribe((data)=>{
      this.states = data,
      err=>{console.log(err)}
    });   
    
  }
  // getBuyCustomerDetails(customer){
  //     var buyCustomerID = customer.customerId;
  //     this.storemanagementService.getSuppliersFromBuyCustomerForDAR(buyCustomerID)
  //     .subscribe((data)=>{
  //       console.log("====111==="+ JSON.stringify(data))
  //     })
  //     this.storemanagementService.getMatrialsForBuyCustomer(buyCustomerID)
  //     .subscribe((data)=>{
  //       console.log("====222==="+ JSON.stringify(data))
  //     })

  // }
getAllCustomerSites_post(customer,state,startDate,endDate){ 
  
    let obj = {
      buyCustomer: customer,
      state: state,
      startDate : startDate,
      endDate : endDate 
    }
    this.storemanagementService.getAllCustomerSites(obj)
      .subscribe((data)=>{
        this.dataSource = data,
        this.cols = [
          { field: 'customerName', header: 'customerName', width: '25%' },
          { field: 'siteName', header: 'siteName', width: '15%' },
          { field: 'address', header: 'address', width: '35%' },
          { field: 'address3', header: 'address3', width: '25%' }
      ];
      
        console.log("========="+ JSON.stringify(this.dataSource.length))
        err=>{console.log(err)}
      });

    }

}