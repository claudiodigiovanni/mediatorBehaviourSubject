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

  clear(){
    this.text = ""
    console.log(this.text)
  }

}
