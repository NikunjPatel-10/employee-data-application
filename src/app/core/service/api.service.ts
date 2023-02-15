import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from 'src/app/employee/employee.model';

@Injectable()
export class ApiService {
  private baseUrl: string
  constructor(private http:HttpClient) {
    this.baseUrl = "http://localhost:3000/"
  }

public postEmployeeData(data:any):Observable<employee>{
  const url = this.baseUrl + "employee";
  return this.http.post<employee>(url,data)
}

public getEmployeeData():Observable<employee[]>{
  const url = this.baseUrl + "employee";
  return this.http.get<employee[]>(url)
}

}
