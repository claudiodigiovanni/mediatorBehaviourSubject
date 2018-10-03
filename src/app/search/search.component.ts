import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Input('placeholder')
  text = "Type your text"

  ngOnInit() {
  }

  clear(input){
    //this.text = ""
    input.value = "";
    console.log(this.text)
  }

}
