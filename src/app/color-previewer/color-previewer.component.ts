import { Component, OnInit, Input } from '@angular/core';
import { MediatorService } from 'src/app/shared/mediator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-color-previewer',
  templateUrl: './color-previewer.component.html',
  styleUrls: ['./color-previewer.component.css']
})
export class ColorPreviewerComponent implements OnInit {

  items$:Observable<any>

  constructor(private mediatorService:MediatorService) { }

  @Input('color')
  color=""

  ngOnInit() {
    this.items$ = this.mediatorService.store$;
    //this.mediatorService.store$.subscribe(val => console.log(val));
  }

}
