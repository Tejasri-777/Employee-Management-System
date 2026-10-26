// import { Component, OnInit} from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Employee } from '../employee';
// import { EmployeeService } from '../employee-service';
// import { Router} from '@angular/router';
// import {ChangeDetectorRef} from '@angular/core'

// @Component({
//   selector: 'app-employee-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './employee-list.html',
//   styleUrl: './employee-list.css'
// })


// export class EmployeeList implements OnInit {

//   employees:Employee[]=[];

//   constructor(private employeeService: EmployeeService, private router:Router,
//     private cdr:ChangeDetectorRef
//   ) {}



//   ngOnInit(): void {
//     this.getEmployees();
//   }


//   getEmployees() {
//   this.employeeService.getEmployeeList().subscribe({
//     next: (data) => {
//       console.log('Received Data:', data);
//       console.log('Length:', data.length);

//       this.employees = data;

//       console.log('Assigned Data:', this.employees);
//        this.cdr.detectChanges();
//     },
//     error: (err) => {
//       console.error(err);
//     }
//   });
// }


//   viewEmployee(id: number) {
//     this.router.navigate(['view-employee', id]);
//   }

//   updateEmployee(id: number) {
//     this.router.navigate(['update-employee', id]);
//   }

//   deleteEmployee(id: number) {

//     if(confirm('Delete this employee?')) {

//       this.employeeService.deleteEmployee(id).subscribe({
//         next: () => {
//           this.getEmployees();
//         },
//         error: (err) => {
//           console.error(err);
//         }
//       });

//     }
//   }

// }

















import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router} from '@angular/router';
import {ChangeDetectorRef} from '@angular/core'

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})


export class EmployeeList implements OnInit {

  employees: Employee[] = [];
pagedEmployees: Employee[] = [];

currentPage: number = 1;
pageSize: number = 5;

totalEmployees: number = 0;
totalPages: number = 0;


  constructor(private employeeService: EmployeeService, private router:Router,
    private cdr:ChangeDetectorRef
  ) {}



  ngOnInit(): void {
    this.getEmployees();
  }


getEmployees() {
  this.employeeService.getEmployeeList().subscribe({
    next: (data) => {

      this.employees = data;

      this.totalEmployees = this.employees.length;

      this.totalPages = Math.ceil(
        this.totalEmployees / this.pageSize
      );

      this.updatePage();

      this.cdr.detectChanges();
    },

    error: (err) => {
      console.error(err);
    }
  });
}




updatePage() {

  const startIndex =
    (this.currentPage - 1) * this.pageSize;

  const endIndex =
    startIndex + this.pageSize;

  this.pagedEmployees =
    this.employees.slice(startIndex, endIndex);
}

nextPage() {

  if (this.currentPage < this.totalPages) {

    this.currentPage++;

    this.updatePage();
  }
}

previousPage() {

  if (this.currentPage > 1) {

    this.currentPage--;

    this.updatePage();
  }
} 


  viewEmployee(id: number) {
    this.router.navigate(['view-employee', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {

    if(confirm('Delete this employee?')) {

      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.getEmployees();
        },
        error: (err) => {
          console.error(err);
        }
      });

    }
  }

  goHome() {
  this.router.navigate(['/home']);
}

}

