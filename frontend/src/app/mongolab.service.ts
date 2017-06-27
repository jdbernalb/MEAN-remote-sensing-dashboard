import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class MongolabService {

  constructor(private http: Http) { }
  getAllmed(){
    // retorna un observable
    return this.http.get('http://localhost:8080/api/nodes');
  }
  getMed(id:String){
    return this.http.get('http://localhost:8080/api/nodes/'+id);
  }

  getLast(){
    return this.http.get('http://localhost:8080/api/last');
  }
  Dashboard(){
    return this.http.get('http://localhost:8080/api/dashboard');
  }

}
