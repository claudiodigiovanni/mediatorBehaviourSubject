import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './shared/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular1';
  color:string = "Yet to be defined....."
  items:any;

  myeventHandler(chosencolor){
    console.log(chosencolor)
    this.color = chosencolor;
  }
  constructor(private myservice: MyserviceService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.items = this.getItems();
    
  }

  getItems(){
    return this.myservice.loadItems();
  }

  create(){
    this.myservice.createLesson('xxx');
  }


}
