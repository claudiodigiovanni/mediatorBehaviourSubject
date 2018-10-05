import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { log } from 'util';
import { from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  arraySource = [1, 2, 3, 4, 5];

  private _store: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.arraySource)

  public store$: Observable<any[]> = this._store.asObservable()

  setState(value){
    this.arraySource.push(value);
    this._store.next(this.arraySource);

  }

  constructor(private http:HttpClient) { }

 
}
