import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  private id :any;
  student:any;

  constructor(private studentService:StudentService,private activedRoute: ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params['id'];
    if(this.id){
      this.studentService.getStudent(this.id).subscribe(item=>{
        this.student = item;
      })
    }else{
      this.student = {
        name:'',
        class:''
      }
    }

  }

  // submit form
  onSubmit(obj:{name:string,class:string}){
    if(this.id){
      return this.studentService.update(this.id,obj).subscribe(res=>{
  
        alert("edit success!")
        // redirect url
        this.router.navigate(['/students'])
      });
    }

    // add
    return this.studentService.storeStudent(obj).subscribe(res=>{
  
      alert("add success!")
      
      // redirect url
      this.router.navigate(['/students'])
    });
  }



}
