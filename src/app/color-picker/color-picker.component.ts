import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  constructor() { }

  @Output('color')
  color: EventEmitter<string> = new EventEmitter<string>();



  ngOnInit() {
  }

  chosen(chosen){
    console.log('emit');
    
    this.color.emit(chosen)
  }

}
