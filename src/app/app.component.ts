import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bale Route App';
  heroes : {name:string, age:number}[]= [
    {"name":"prema", "age":6},
    {"name":"kusuma","age":6},
    {"name":"soma","age":6}
  ]
  master = 'Master';
  names = ["prema", " ", "ff", ""];
}
