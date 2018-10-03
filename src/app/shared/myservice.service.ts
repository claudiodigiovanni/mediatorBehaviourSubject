import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  loadItems():Observable<any>{
    console.log('service call....');
    
   return  this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  createLesson(description){
    const post = {title:description,body:description,userId:1};
    const headers = new HttpHeaders();
    headers.append('Content-type','application/json; charset=utf-8')
    this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post),{headers})
    .subscribe(
      item => console.log(item ),
      error => console.log(error)
      )
  }
}
