import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    private baseURL = 'http://localhost:8081/ems/employees';
    

    constructor(private httpClient: HttpClient) {}



    // get all employees
    getEmployeeList():Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.baseURL}`);
    }



    // add employee
    addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(`${this.baseURL}`, employee);
    }

 
    //get employee by id
    getEmployeeById(id: number){ 
  return this.httpClient.get<Employee>(
    `${this.baseURL}/${id}`
  );
}


//update employee
updateEmployee(id: number, employee: Employee): Observable<Employee> {
  return this.httpClient.patch<Employee>(
    `${this.baseURL}/${id}`,
    employee
  );
}




//delete employee
deleteEmployee(id: number): Observable<any> {
  return this.httpClient.delete(
    `${this.baseURL}/${id}`,
    {
      responseType: 'text'
    }
  );
}


}
