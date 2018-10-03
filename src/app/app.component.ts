import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  color:string = "Yet to be defined....."
  myeventHandler(chosencolor){
    console.log(chosencolor)
    this.color = chosencolor;
  }


}
