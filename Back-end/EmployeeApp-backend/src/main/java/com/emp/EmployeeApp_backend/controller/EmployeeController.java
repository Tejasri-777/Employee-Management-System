package com.emp.EmployeeApp_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.EmployeeApp_backend.exceptions.ResourceNotFoundException;
import com.emp.EmployeeApp_backend.model.Employee;
import com.emp.EmployeeApp_backend.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/ems")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository repo;
	
	// get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return repo.findAll();
	}
	
	
	//add employee
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee emp) {
		return repo.save(emp);
	}
	
	
	//get employee by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee emp= repo.findById(id)
				.orElseThrow(
						()->new ResourceNotFoundException("Employee not exist with id: "+id)
						);
		return ResponseEntity.ok(emp); 
	}
	
	
	
	//update employee
	
	@PatchMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
		Employee emp1=repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id "+id));
		
		if (employee.getFullname() != null &&
			    !employee.getFullname().trim().isEmpty()) {
			    emp1.setFullname(employee.getFullname());
			}

			if (employee.getEmail() != null &&
			    !employee.getEmail().trim().isEmpty()) {
			    emp1.setEmail(employee.getEmail());
			}

			if (employee.getDoj() != null) {
			    emp1.setDoj(employee.getDoj());
			}

			if (employee.getProject() != null &&
			    !employee.getProject().trim().isEmpty()) {
			    emp1.setProject(employee.getProject());
			}
		
		Employee updatedEmployee=repo.save(emp1);
		return ResponseEntity.ok(updatedEmployee);
		
	}
	
	
	
	
	// Delete Employee
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {

		Employee emp=repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found"+id));
		
		repo.deleteById(id);
		return ResponseEntity.ok("Employee deleted successfully");
	}

	
}
