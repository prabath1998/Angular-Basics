import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseAPIUrl:string = 'https://angularfirebaseapp-561df-default-rtdb.firebaseio.com/';

  constructor(private http:HttpClient) { }

  create(customer:any):Observable<any>{
    return this.http.post(`${this.baseAPIUrl}/customer.json`,customer);
  }

  getAll():Observable<any>{
    return this.http.get(`${this.baseAPIUrl}/customer.json`).pipe(map((res) => {
      const customers:any[] = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          customers.push({...res[key], id:key});
        }
        
      }

      return customers;
    }));
  }
}
