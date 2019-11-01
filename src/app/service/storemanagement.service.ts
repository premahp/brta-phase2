import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee,ICustomer, IState } from '../interface/storemanagement_interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoremanagementService {

   //public url_customer : string = 'api/brta/app/ui/common/get/buycustomers/all';
   public url_customer : string = '../assets/data/storemanagement/customers.json';
   public url_state : string = '../assets/data/storemanagement/state.json';
   public url_bybuycustomers : string = 'api/brta/app/ui/common/get/supplier/bybuycustomer';
   public url_bycustomer : string = 'api/brta/app/ui/common/get/material/bycustomer';
   public url_storeMng : string = 'api/brta/app/ui/common/getAllCustomersites';
   

  constructor(private http : HttpClient) { }  
  
  public getCustomers()  : Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.url_customer);    
  }
  public getStates()  : Observable<IState[]>{
    return this.http.get<IState[]>(this.url_state);    
  } 
  // getSuppliersFromBuyCustomerForDAR(buyCustomerID){
  //   return this.http.post(this.url_bybuycustomers, buyCustomerID);
  // } 
  // getMatrialsForBuyCustomer(buyCustomerID){
  //   return this.http.post(this.url_bycustomer,buyCustomerID);
  // } 
  getAllCustomerSites(obj){
          return this.http.post(this.url_storeMng, obj);      
  }
}
