import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent {
  employee: any = {
    name: '',
  };
  submitted=false;
  constructor(
    private empService: EmpService,
    public router: Router,
    private aroute: ActivatedRoute) {}
    public id: any = this.aroute.snapshot.params['id'];    
  ngOnInit() {			
    this.empService
      .getEmployeeById(this.id)
      .subscribe((emp) => (this.employee = emp));
    console.log(this.employee);
  }

  updateEmployee() {
    console.log(this.employee);
    this.empService
      .updateEmployee(this.employee)		
      .subscribe((data: {}) => this.router.navigate(['/emplist']));
  }

  onSubmit() {
    this.submitted = true;
    alert('Employee datas are updated successfully!');
  }
}

