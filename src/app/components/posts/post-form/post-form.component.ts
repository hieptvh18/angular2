import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  // define form
  postForm:FormGroup;

  // define obj,id
  private id: any = null;
  posts:any;

  constructor(private router: Router,
    private postService: PostService) { 

      // define form-component
    this.postForm = new FormGroup({
      title: new FormControl('',Validators.required),
      content: new FormControl('',
      [Validators.minLength(5),
        Validators.required]),
      status:new FormControl(0),
    });
   }

  ngOnInit(): void {

  }

  onSubmit(obj:any){

    this.postService.store(this.postForm.value).subscribe(res=>{
      this.router.navigate(['/posts'])

    })
  }

  

}
