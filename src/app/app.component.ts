import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './shared/myservice.service';
import { MediatorService } from 'src/app/shared/mediator.service';

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


  constructor(private mediatorService:MediatorService, private myservice: MyserviceService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     this.getItems().subscribe(items => console.log(items))
  }

  getItems(){
    return this.myservice.loadItems();
  }

  create(){
   // this.myservice.createLesson('xxx');
  }

  broadcast(val){
    this.mediatorService.setState(val);
  }


}
