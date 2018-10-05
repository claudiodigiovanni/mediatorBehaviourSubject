import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MediatorService } from 'src/app/shared/mediator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  constructor(private mediatorService:MediatorService) { }

  @Output('color')
  color: EventEmitter<string> = new EventEmitter<string>();

  items$:Observable<any>


  ngOnInit() {
    this.items$ = this.mediatorService.store$;
    //this.mediatorService.store$.subscribe(val => console.log(val));
    

  }

  reset(){
    this.color.emit('..YTBD...')
  }

  chosen(chosen){
    console.log('emit');
    
    this.color.emit(chosen)
  }

}
