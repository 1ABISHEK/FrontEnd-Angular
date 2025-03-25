import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  employees: any = [];
  selectedId=0;
  constructor(private empservice: EmpService,private router: Router) {}
  ngOnInit() {
    this.employees = this.empservice
      .getAllEmployees()
      .subscribe((emp) => (this.employees = emp));
    console.log(this.employees);
  }
  onDelete(emp: Employee) {
    this.selectedId = emp.id;
    console.log(emp);
    this.empservice
      .deleteEmployee(this.selectedId)
      .subscribe((data: {}) => this.router.navigate(['/emplist']));
  }
}
