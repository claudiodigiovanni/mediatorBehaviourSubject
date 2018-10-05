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
    this.deleteItem()
   return  this.http.get('http://localhost:3000/users')
  }

  updateItem(){
    console.log('updateItem call....');
    
    this.http.post('http://localhost:3000/users/5bb534bafb6fc0504a0f74a3',{name:'ccccc',email:'xxxxx'}).subscribe(item => console.log(item))
  }

  createItem(){
    console.log('createItem call....');
    
    this.http.post('http://localhost:3000/users/',{name:'nuovo',email:'nuovo'}).subscribe(item => console.log(item))
  }

  deleteItem(){
    console.log('deleteItem call....');
    
    this.http.delete('http://localhost:3000/users/5bb69022ce6fad5b242680ef').subscribe(item => console.log(item))
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
