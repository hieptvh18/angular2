import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:any;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getList()
    
  }
  
  // get list data
  getList(){
    this.studentService.getStudents().subscribe((data)=>{
      this.students = data;
    })
  }

  remove(id:number | string){
    this.studentService.removeStudent(id).subscribe((data)=>{
     this.getList();
    });
  }

  
}
