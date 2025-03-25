import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empnamelist',
  templateUrl: './empnamelist.component.html',
  styleUrls: ['./empnamelist.component.css']
})
export class EmpnamelistComponent {
  employees: any=[];

  constructor(private empservice: EmpService){}
  
    ngOnInit(){
      this.employees = this.empservice.getAllEmployees();
      console.log(this.employees);
    }
}
