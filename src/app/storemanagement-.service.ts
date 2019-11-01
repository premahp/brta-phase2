import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  } from './interface/storemanagement_interface'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoremanagementService {
  public url_buycustomers : string = 'http://dummy.restapiexample.com/api/v1/employees';
 

  constructor(private http : HttpClient) { }
  // getbuyCustomers() : Observable<IBuycustomer[]>{
  //   return this.http.get<IBuycustomer[]>(this.url_buycustomers);
      
  // }
  public getbuyCustomers(){
    return this.http.get(this.url_buycustomers);
    
  }
  
}

