import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const apiURl = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http:HttpClient) { }

  // handle call api(define methods get data)

  get(){
    return this.http.get(apiURl);
  } 

  show(id:number|string){
    return this.http.get(`${apiURl}/${id}`); //https://localhost:3000/students/1
  }
  
  // create
  store(data:any) {
    return this.http.post(apiURl,data);
  }

  // remove
  destroy(id:number | string){
    return this.http.delete(`${apiURl}/${id}`); //https://localhost:3000/students/1
  }

  update(id:number|string, data:any){
    return this.http.put(`${apiURl}/${id}`,data); //https://localhost:3000/students/1

  }
}
