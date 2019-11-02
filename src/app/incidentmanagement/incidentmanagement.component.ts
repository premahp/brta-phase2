import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incidentmanagement',
  templateUrl: './incidentmanagement.component.html',
  styleUrls: ['./incidentmanagement.component.css']
})
export class IncidentmanagementComponent implements OnInit {
//@Input() star;
//@Input('master')  masterName: string;
private _name = '';
@Input() 
set name(name:string){
  this._name = (name && name.trim()) || "<no name set>";
};
get name():string {
  return this._name;
}
  constructor() { }

  ngOnInit() {
  }
  debugger

}
