import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from 'src/app/employee/employee.model';

@Injectable()
export class ApiService {
  private baseUrl: string
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"
  }

  public postEmployeeData(Employee: employee): Observable<employee> {
    const url = this.baseUrl + "employee";
    return this.http.post<employee>(url, Employee)
  }

  public getEmployeeDataById(id: number): Observable<employee> {
    const url = this.baseUrl + "employee/" + id;
    return this.http.get<employee>(url)
  }

  public getEmployeeData(): Observable<employee[]> {
    const url = this.baseUrl + "employee";
    return this.http.get<employee[]>(url)
  }

  public deleteEmployeeData(id: number): Observable<employee> {
    const url = this.baseUrl + "employee/" + id;
    return this.http.delete<employee>(url);
  }

  public updateEmployeeData(Employee: employee, id: number): Observable<employee> {
    
    const url = this.baseUrl + "employee/" + id;
    return this.http.put<employee>(url, Employee)
  }

}
